/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ResponseDataDtoBoolean {
  success?: boolean;
  reason?: string;
  data?: boolean;
}

export interface ResponseDataDtoObject {
  success?: boolean;
  reason?: string;
  data?: object;
}

export interface ResponseDataDtoInteger {
  success?: boolean;
  reason?: string;
  /** @format int32 */
  data?: number;
}

export interface ResponseDataDtoLong {
  success?: boolean;
  reason?: string;
  /** @format int64 */
  data?: number;
}

export interface OperatorCompanyRequestDto {
  /** @format int64 */
  id?: number;
  operator: string;
  company: string;
}

export interface OperatorRequestDto {
  /** @format int64 */
  id: number;
  name: string;
}

export interface ResponseDataDtoSmsPotResponse {
  success?: boolean;
  reason?: string;
  data?: SmsPotResponse;
}

export interface SmsPotResponse {
  msg?: string;
  success?: boolean;
  error?: string;
}

export interface ResponseDataDtoString {
  success?: boolean;
  reason?: string;
  data?: string;
}

export interface ShablonOperatorRequestDto {
  /** @format int64 */
  id?: number;
  /** @format int32 */
  shablonCode: number;
  operator: string;
}

export interface OperatorStatsRequestDto {
  operatorName?: string;
  /** @format int64 */
  totalNumberOfMessages?: number;
  /** @format int64 */
  approvedMessageCount?: number;
  /** @format int64 */
  rejectedMessageCount?: number;
  /** @format int64 */
  waitingMessageCount?: number;
}

export interface ResponseDataDtoListOperatorStatsRequestDto {
  success?: boolean;
  reason?: string;
  data?: OperatorStatsRequestDto[];
}

export interface MessageStatusDto {
  /** @format int64 */
  sendMessageId?: number;
  phoneNumber?: string;
  responseMessageId?: string;
  operator?: string;
  status?: string;
  /** @format date-time */
  createdDate?: string;
}

export interface ResponseDataDtoListMessageStatusDto {
  success?: boolean;
  reason?: string;
  data?: MessageStatusDto[];
}

export interface Link {
  href?: string;
  templated?: boolean;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "http://172.24.58.26:12354";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(
      typeof value === "number" ? value : `${value}`
    )}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key)
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string" ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        },
        signal:
          (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) ||
          null,
        body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
      }
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title SMS API
 * @version v3
 * @termsOfService Terms of service
 * @baseUrl http://172.24.58.26:12354
 *
 * SMS API
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags SMS API
     * @name SetSmsUssd
     * @request GET:/api/v1/sms/set-sms-ussd
     * @secure
     */
    setSmsUssd: (params: RequestParams = {}) =>
      this.request<ResponseDataDtoBoolean, any>({
        path: `/api/v1/sms/set-sms-ussd`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMS API
     * @name SetSmsUssd1
     * @request POST:/api/v1/sms/set-sms-ussd
     * @secure
     */
    setSmsUssd1: (params: RequestParams = {}) =>
      this.request<ResponseDataDtoBoolean, any>({
        path: `/api/v1/sms/set-sms-ussd`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMS API
     * @name SetSmsState
     * @request GET:/api/v1/sms/set-sms-state
     * @secure
     */
    setSmsState: (params: RequestParams = {}) =>
      this.request<ResponseDataDtoBoolean, any>({
        path: `/api/v1/sms/set-sms-state`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMS API
     * @name SetSmsState1
     * @request POST:/api/v1/sms/set-sms-state
     * @secure
     */
    setSmsState1: (params: RequestParams = {}) =>
      this.request<ResponseDataDtoBoolean, any>({
        path: `/api/v1/sms/set-sms-state`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMS API
     * @name SetSmsStateEskiz
     * @request GET:/api/v1/sms/set-sms-state-eskiz
     * @secure
     */
    setSmsStateEskiz: (
      query?: {
        /** @default "" */
        message_id?: string;
        /** @default "" */
        user_sms_id?: string;
        /** @default "" */
        country?: string;
        /** @default "" */
        phone_number?: string;
        /** @default "" */
        sms_count?: string;
        /** @default "" */
        status?: string;
        /** @default "" */
        status_date?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ResponseDataDtoObject, any>({
        path: `/api/v1/sms/set-sms-state-eskiz`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMS API
     * @name SetSmsStateEskiz1
     * @request POST:/api/v1/sms/set-sms-state-eskiz
     * @secure
     */
    setSmsStateEskiz1: (
      query?: {
        /** @default "" */
        message_id?: string;
        /** @default "" */
        user_sms_id?: string;
        /** @default "" */
        country?: string;
        /** @default "" */
        phone_number?: string;
        /** @default "" */
        sms_count?: string;
        /** @default "" */
        status?: string;
        /** @default "" */
        status_date?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ResponseDataDtoObject, any>({
        path: `/api/v1/sms/set-sms-state-eskiz`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMS API
     * @name SetRabbitByStatus
     * @request GET:/api/v1/sms/set-rabbit-by-status
     * @secure
     */
    setRabbitByStatus: (params: RequestParams = {}) =>
      this.request<ResponseDataDtoInteger, any>({
        path: `/api/v1/sms/set-rabbit-by-status`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMS API
     * @name SetRabbitByStatus1
     * @request POST:/api/v1/sms/set-rabbit-by-status
     * @secure
     */
    setRabbitByStatus1: (params: RequestParams = {}) =>
      this.request<ResponseDataDtoInteger, any>({
        path: `/api/v1/sms/set-rabbit-by-status`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMS API
     * @name SetResponseSmesStateToAnswerSmsStatusByMySmsId
     * @request GET:/api/v1/sms/set-answer-sms-state-by-sms-id
     * @secure
     */
    setResponseSmesStateToAnswerSmsStatusByMySmsId: (
      query: {
        id: string;
        status: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ResponseDataDtoBoolean, any>({
        path: `/api/v1/sms/set-answer-sms-state-by-sms-id`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMS API
     * @name SetResponseSmesStateToAnswerSmsStatusByMySmsId1
     * @request POST:/api/v1/sms/set-answer-sms-state-by-sms-id
     * @secure
     */
    setResponseSmesStateToAnswerSmsStatusByMySmsId1: (
      query: {
        id: string;
        status: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ResponseDataDtoBoolean, any>({
        path: `/api/v1/sms/set-answer-sms-state-by-sms-id`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMS API
     * @name SendSms
     * @request GET:/api/v1/sms/sendSms
     * @secure
     */
    sendSms: (
      query: {
        /** @default "uz" */
        lang?: string;
        /** @format int32 */
        shablon_code: number;
        /**
         * @format int32
         * @default 5
         */
        priority?: number;
        /** @default "" */
        p0?: string;
        /** @default "" */
        p1?: string;
        /** @default "" */
        p2?: string;
        /** @default "" */
        p3?: string;
        /** @default "" */
        p4?: string;
        /** @default "" */
        p5?: string;
        /** @default "" */
        p6?: string;
        /** @default "" */
        p7?: string;
        /** @default "" */
        p8?: string;
        /** @default "" */
        p9?: string;
        /**
         * @format int32
         * @default 0
         */
        ns10_code?: number;
        /**
         * @format int32
         * @default 0
         */
        ns11_code?: number;
        /** @default "-" */
        tin?: string;
        /**
         * @format int32
         * @default 0
         */
        is_individual?: number;
        /**
         * @format int64
         * @default 4548
         */
        service_number?: number;
        phone: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ResponseDataDtoLong, any>({
        path: `/api/v1/sms/sendSms`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMS API
     * @name SendSms1
     * @request POST:/api/v1/sms/sendSms
     * @secure
     */
    sendSms1: (
      query: {
        /** @default "uz" */
        lang?: string;
        /** @format int32 */
        shablon_code: number;
        /**
         * @format int32
         * @default 5
         */
        priority?: number;
        /** @default "" */
        p0?: string;
        /** @default "" */
        p1?: string;
        /** @default "" */
        p2?: string;
        /** @default "" */
        p3?: string;
        /** @default "" */
        p4?: string;
        /** @default "" */
        p5?: string;
        /** @default "" */
        p6?: string;
        /** @default "" */
        p7?: string;
        /** @default "" */
        p8?: string;
        /** @default "" */
        p9?: string;
        /**
         * @format int32
         * @default 0
         */
        ns10_code?: number;
        /**
         * @format int32
         * @default 0
         */
        ns11_code?: number;
        /** @default "-" */
        tin?: string;
        /**
         * @format int32
         * @default 0
         */
        is_individual?: number;
        /**
         * @format int64
         * @default 4548
         */
        service_number?: number;
        phone: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ResponseDataDtoLong, any>({
        path: `/api/v1/sms/sendSms`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags TAX API
     * @name SetRabbitByStatus2
     * @request GET:/api/v1/sms/send-sms-list
     * @secure
     */
    setRabbitByStatus2: (params: RequestParams = {}) =>
      this.request<ResponseDataDtoInteger, any>({
        path: `/api/v1/sms/send-sms-list`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags TAX API
     * @name SetRabbitByStatus3
     * @request POST:/api/v1/sms/send-sms-list
     * @secure
     */
    setRabbitByStatus3: (params: RequestParams = {}) =>
      this.request<ResponseDataDtoInteger, any>({
        path: `/api/v1/sms/send-sms-list`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OPERATOR_COMPANY
     * @name Update
     * @summary updating operator-company
     * @request PUT:/api/v1/operator_company/update
     * @secure
     */
    update: (
      query: {
        operatorCompanyRequestDto: OperatorCompanyRequestDto;
      },
      params: RequestParams = {}
    ) =>
      this.request<ResponseDataDtoObject, any>({
        path: `/api/v1/operator_company/update`,
        method: "PUT",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OPERATOR
     * @name Update1
     * @summary updating operator
     * @request PUT:/api/v1/operator/update
     * @secure
     */
    update1: (data: OperatorRequestDto, params: RequestParams = {}) =>
      this.request<ResponseDataDtoObject, any>({
        path: `/api/v1/operator/update`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OPERATOR
     * @name Deactivate
     * @summary deactivating operator
     * @request PUT:/api/v1/operator/deactivate
     * @secure
     */
    deactivate: (
      query: {
        /** @format int64 */
        id: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<ResponseDataDtoObject, any>({
        path: `/api/v1/operator/deactivate`,
        method: "PUT",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OPERATOR
     * @name Activate
     * @summary activating operator
     * @request PUT:/api/v1/operator/activate
     * @secure
     */
    activate: (
      query: {
        /** @format int64 */
        id: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<ResponseDataDtoObject, any>({
        path: `/api/v1/operator/activate`,
        method: "PUT",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags TAX API
     * @name TestTaxService
     * @request POST:/api/v1/sms/test/tax-service/send
     * @secure
     */
    testTaxService: (
      query?: {
        /** @default "" */
        mobile_phone?: string;
        /** @default "" */
        message?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/api/v1/sms/test/tax-service/send`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMS API
     * @name TestPlayMobile
     * @request POST:/api/v1/sms/test/playmobile
     * @secure
     */
    testPlayMobile: (
      query: {
        phoneNumber: string;
        message: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ResponseDataDtoSmsPotResponse, any>({
        path: `/api/v1/sms/test/playmobile`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMS API
     * @name SaveBlackList
     * @request POST:/api/v1/sms/send-black-list
     * @secure
     */
    saveBlackList: (
      query: {
        /** @default "uz" */
        lang?: string;
        /**
         * @format int32
         * @default 1
         */
        operator_id?: number;
        phone: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ResponseDataDtoString, any>({
        path: `/api/v1/sms/send-black-list`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SHABLON-OPERATOR
     * @name Update2
     * @summary updating shablon-operator
     * @request POST:/api/v1/shablon-operator/update
     * @secure
     */
    update2: (data: ShablonOperatorRequestDto, params: RequestParams = {}) =>
      this.request<ResponseDataDtoObject, any>({
        path: `/api/v1/shablon-operator/update`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SHABLON-OPERATOR
     * @name Create
     * @summary creating shablon-operator
     * @request POST:/api/v1/shablon-operator/create
     * @secure
     */
    create: (data: ShablonOperatorRequestDto, params: RequestParams = {}) =>
      this.request<ResponseDataDtoLong, any>({
        path: `/api/v1/shablon-operator/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OPERATOR_COMPANY
     * @name Create1
     * @summary Creating operator-company
     * @request POST:/api/v1/operator_company/create
     * @secure
     */
    create1: (data: OperatorCompanyRequestDto, params: RequestParams = {}) =>
      this.request<ResponseDataDtoLong, any>({
        path: `/api/v1/operator_company/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OPERATOR
     * @name Create2
     * @summary creating operator
     * @request POST:/api/v1/operator/create
     * @secure
     */
    create2: (
      query: {
        name: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ResponseDataDtoLong, any>({
        path: `/api/v1/operator/create`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags INFO API
     * @name GetAllOperatorStatsByDate
     * @request GET:/api/v1/info/get-all-operator-stats-by-date
     * @secure
     */
    getAllOperatorStatsByDate: (
      query: {
        /**
         * date format must be the same as example (dd.MM.yyyy)
         * @example "10.05.2015"
         */
        "begin date": string;
        /**
         * date format must be the same as example (dd.MM.yyyy)
         * @example "08.01.2024"
         */
        "end date": string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ResponseDataDtoListOperatorStatsRequestDto, any>({
        path: `/api/v1/info/get-all-operator-stats-by-date`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags INFO API
     * @name GetAllMessageStatusByNumber
     * @request GET:/api/v1/info/get-all-message-status-by-number
     * @secure
     */
    getAllMessageStatusByNumber: (
      query: {
        number: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ResponseDataDtoListMessageStatusDto, any>({
        path: `/api/v1/info/get-all-message-status-by-number`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags INFO API
     * @name GetAllMessageStatusByNumberAndOperator
     * @request GET:/api/v1/info/get-all-message-status-by-number-operator
     * @secure
     */
    getAllMessageStatusByNumberAndOperator: (
      query: {
        number: string;
        operator: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ResponseDataDtoListMessageStatusDto, any>({
        path: `/api/v1/info/get-all-message-status-by-number-operator`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
  actuator = {
    /**
     * No description
     *
     * @tags Actuator
     * @name Links
     * @summary Actuator root web endpoint
     * @request GET:/actuator
     * @secure
     */
    links: (params: RequestParams = {}) =>
      this.request<Record<string, Record<string, Link>>, any>({
        path: `/actuator`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Actuator
     * @name Health
     * @summary Actuator web endpoint 'health'
     * @request GET:/actuator/health
     * @secure
     */
    health: (params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/actuator/health`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Actuator
     * @name HealthPath
     * @summary Actuator web endpoint 'health-path'
     * @request GET:/actuator/health/**
     * @secure
     */
    healthPath: (params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/actuator/health/**`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
