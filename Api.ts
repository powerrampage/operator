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
  /** @format int32 */
  count?: number;
  /** @format int64 */
  totalCount?: number;
}

export interface ResponseDataDtoObject {
  success?: boolean;
  reason?: string;
  data?: object;
  /** @format int32 */
  count?: number;
  /** @format int64 */
  totalCount?: number;
}

export interface ResponseDataDtoInteger {
  success?: boolean;
  reason?: string;
  /** @format int32 */
  data?: number;
  /** @format int32 */
  count?: number;
  /** @format int64 */
  totalCount?: number;
}

export interface ResponseDataDtoLong {
  success?: boolean;
  reason?: string;
  /** @format int64 */
  data?: number;
  /** @format int32 */
  count?: number;
  /** @format int64 */
  totalCount?: number;
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

export interface ResponseDataDtoString {
  success?: boolean;
  reason?: string;
  data?: string;
  /** @format int32 */
  count?: number;
  /** @format int64 */
  totalCount?: number;
}

export interface SmppShablonReqDto {
  /** @format int32 */
  id: number;
  /** @format int32 */
  priority: number;
  tag: string;
  /** @format int64 */
  operatorCode: number;
  /** @format int32 */
  blocked: number;
}

export interface ShablonOperatorRequestDto {
  /** @format int64 */
  id?: number;
  /** @format int32 */
  shablonCode: number;
  operator: string;
}

export interface Pageable {
  /**
   * @format int32
   * @min 0
   */
  page?: number;
  /**
   * @format int32
   * @min 1
   */
  size?: number;
  sort?: string[];
}

export interface ResponseDataDtoListSmppShablonResDto {
  success?: boolean;
  reason?: string;
  data?: SmppShablonResDto[];
  /** @format int32 */
  count?: number;
  /** @format int64 */
  totalCount?: number;
}

export interface SmppShablonResDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  code?: number;
  textRu?: string;
  textUz?: string;
  /** @format int32 */
  priority?: number;
  /** @format int32 */
  state?: number;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  tag?: string;
  /** @format int64 */
  operatorCode?: number;
  /** @format int32 */
  blocked?: number;
}

export interface ResponseDataDtoListShablonOperatorResponseDto {
  success?: boolean;
  reason?: string;
  data?: ShablonOperatorResponseDto[];
  /** @format int32 */
  count?: number;
  /** @format int64 */
  totalCount?: number;
}

export interface ShablonOperatorResponseDto {
  /** @format int64 */
  id?: number;
  /** @format int32 */
  shablonCode?: number;
  operator?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
}

export interface OperatorCompanyResponseDto {
  /** @format int64 */
  id?: number;
  operator?: string;
  company?: string;
  /** @format int32 */
  isActive?: number;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
}

export interface ResponseDataDtoListOperatorCompanyResponseDto {
  success?: boolean;
  reason?: string;
  data?: OperatorCompanyResponseDto[];
  /** @format int32 */
  count?: number;
  /** @format int64 */
  totalCount?: number;
}

export interface OperatorResponseDto {
  /** @format int64 */
  id?: number;
  name?: string;
  /** @format int32 */
  isActive?: number;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
}

export interface ResponseDataDtoOperatorResponseDto {
  success?: boolean;
  reason?: string;
  data?: OperatorResponseDto;
  /** @format int32 */
  count?: number;
  /** @format int64 */
  totalCount?: number;
}

export interface ResponseDataDtoListOperatorResponseDto {
  success?: boolean;
  reason?: string;
  data?: OperatorResponseDto[];
  /** @format int32 */
  count?: number;
  /** @format int64 */
  totalCount?: number;
}

export interface DashboardResponseDto {
  /** @format int64 */
  totalApprovedMessageCount?: number;
  /** @format int64 */
  totalRejectedMessageCount?: number;
  /** @format int64 */
  totalWaitingMessageCount?: number;
  messageCountByDateDtoList?: MessageCountByDateDto[];
  operatorStatsResponseDtoList?: OperatorStatsResponseDto[];
}

export interface MessageCountByDateDto {
  /** @format date */
  date?: string;
  /** @format int64 */
  messageCount?: number;
}

export interface OperatorStatsResponseDto {
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

export interface ResponseDataDtoDashboardResponseDto {
  success?: boolean;
  reason?: string;
  data?: DashboardResponseDto;
  /** @format int32 */
  count?: number;
  /** @format int64 */
  totalCount?: number;
}

export interface MessageStatusDto {
  /** @format int64 */
  id?: number;
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
  /** @format int32 */
  count?: number;
  /** @format int64 */
  totalCount?: number;
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
     * @summary PlayMobile sms kelganda o'qib olish uchun
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
     * @summary PlayMobile sms kelganda o'qib olish uchun
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
     * @name SetSmsStateEskiz
     * @summary Eskiz uchun SMS statusini olish
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
     * @summary Eskiz uchun SMS statusini olish
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
     * @name SetSmsState2
     * @summary Getting playMobile sms response state
     * @request GET:/api/v1/sms/set-sms-state
     * @secure
     */
    setSmsState2: (params: RequestParams = {}) =>
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
     * @name SetSmsState3
     * @summary Getting playMobile sms response state
     * @request POST:/api/v1/sms/set-sms-state
     * @secure
     */
    setSmsState3: (params: RequestParams = {}) =>
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
     * @name SetRabbitByStatus
     * @summary Exceldan yuklab olib qo'lda jo'natish uchun ishlatiladi
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
     * @summary Exceldan yuklab olib qo'lda jo'natish uchun ishlatiladi
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
     * @tags OPERATOR_COMPANY
     * @name Update
     * @summary nomlarini o'zgartirish id orqali
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
     * @tags OPERATOR_COMPANY
     * @name Deactivate
     * @summary operator-companyni o'chirish
     * @request PUT:/api/v1/operator_company/deactivate
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
        path: `/api/v1/operator_company/deactivate`,
        method: "PUT",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OPERATOR_COMPANY
     * @name Activate
     * @summary operator-companyni yoqish
     * @request PUT:/api/v1/operator_company/activate
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
        path: `/api/v1/operator_company/activate`,
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
     * @summary operatorni nomini o'zgartirish
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
     * @name Deactivate1
     * @summary operatorni o'chirish
     * @request PUT:/api/v1/operator/deactivate
     * @secure
     */
    deactivate1: (
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
     * @name ChangeDefaultOperator
     * @summary default operatorni ozgartirish operator id berish orqali
     * @request PUT:/api/v1/operator/change-default-operator
     * @secure
     */
    changeDefaultOperator: (
      query: {
        /** @format int64 */
        operator_id: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<ResponseDataDtoObject, any>({
        path: `/api/v1/operator/change-default-operator`,
        method: "PUT",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OPERATOR
     * @name Activate1
     * @summary operatorni yoqish
     * @request PUT:/api/v1/operator/activate
     * @secure
     */
    activate1: (
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
     * @tags SMS API
     * @name SaveBlackList
     * @summary Ushbu telefon raqamiga Smsni yubormaydigan qilish uchun
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
     * @tags SHABLON-API
     * @name Save
     * @summary shablonni update qilish
     * @request POST:/api/v1/shablon/update
     * @secure
     */
    save: (data: SmppShablonReqDto, params: RequestParams = {}) =>
      this.request<ResponseDataDtoString, any>({
        path: `/api/v1/shablon/update`,
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
     * @name Update2
     * @summary shablon-operator nomlarini o'zgartish
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
     * @summary shablon-operator yaratish
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
     * @summary operatorni mobile kompaniyalarga bog'lashni yaratish
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
     * @summary operator yaratish
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
     * @tags SHABLON-API
     * @name GetAll
     * @summary hamma shablonlar listini olish
     * @request GET:/api/v1/shablon/get-all
     * @secure
     */
    getAll: (
      query: {
        pageable: Pageable;
      },
      params: RequestParams = {}
    ) =>
      this.request<ResponseDataDtoListSmppShablonResDto, any>({
        path: `/api/v1/shablon/get-all`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SHABLON-OPERATOR
     * @name GetAll1
     * @summary hamma shablon operator listini olish
     * @request GET:/api/v1/shablon-operator/get-all
     * @secure
     */
    getAll1: (params: RequestParams = {}) =>
      this.request<ResponseDataDtoListShablonOperatorResponseDto, any>({
        path: `/api/v1/shablon-operator/get-all`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OPERATOR_COMPANY
     * @name GetAll2
     * @summary barcha operator-company listini olish
     * @request GET:/api/v1/operator_company/get-all
     * @secure
     */
    getAll2: (params: RequestParams = {}) =>
      this.request<ResponseDataDtoListOperatorCompanyResponseDto, any>({
        path: `/api/v1/operator_company/get-all`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OPERATOR
     * @name GetDefaultOperator
     * @summary default operatorni olish
     * @request GET:/api/v1/operator/get-default-operator
     * @secure
     */
    getDefaultOperator: (params: RequestParams = {}) =>
      this.request<ResponseDataDtoOperatorResponseDto, any>({
        path: `/api/v1/operator/get-default-operator`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OPERATOR
     * @name GetAllOperator
     * @summary barcha operatorlarni olish
     * @request GET:/api/v1/operator/get-all
     * @secure
     */
    getAllOperator: (params: RequestParams = {}) =>
      this.request<ResponseDataDtoListOperatorResponseDto, any>({
        path: `/api/v1/operator/get-all`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags INFO API
     * @name GetEachOperatorStatsByDate
     * @summary dashboard statistikasi sana boyicha
     * @request GET:/api/v1/info/get-all-operator-stats-by-date
     * @secure
     */
    getEachOperatorStatsByDate: (
      query: {
        /**
         * date format must be the same as example (dd.MM.yyyy)
         * @example "10.05.2015"
         */
        beginDate: string;
        /**
         * date format must be the same as example (dd.MM.yyyy)
         * @example "10.05.2024"
         */
        endDate: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ResponseDataDtoDashboardResponseDto, any>({
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
     * @summary tel nomerini berish orqali ushbu tel nomerdan ketgan smslarstatuslari listini olish
     * @request GET:/api/v1/info/get-all-message-status-by-number
     * @secure
     */
    getAllMessageStatusByNumber: (
      query: {
        /** eg: +998911234567 or 998911234567 */
        number: string;
        pageable: Pageable;
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
     * @summary operator nomi va tel nomer berish orqali shu nomerdan ushbuoperator orqali yuborilgan smslar boyicha sms statuslar listini olish
     * @request GET:/api/v1/info/get-all-message-status-by-number-operator
     * @secure
     */
    getAllMessageStatusByNumberAndOperator: (
      query: {
        /** eg: +998911234567 or 998911234567 */
        number: string;
        /**
         * eg: PlayMobile, TaxService, Eskiz
         * @example "Eskiz"
         */
        operator: string;
        pageable: Pageable;
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

    /**
     * No description
     *
     * @tags INFO API
     * @name ClearingAllCachesManually
     * @summary Barcha cachelarni tozalash uchun
     * @request GET:/api/v1/info/clear-all-caches-manually
     * @secure
     */
    clearingAllCachesManually: (params: RequestParams = {}) =>
      this.request<ResponseDataDtoObject, any>({
        path: `/api/v1/info/clear-all-caches-manually`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  sms = {
    /**
     * No description
     *
     * @tags SMS API
     * @name SetSmsUssd2
     * @summary PlayMobile sms kelganda o'qib olish uchun
     * @request GET:/sms/set-sms-ussd
     * @secure
     */
    setSmsUssd2: (params: RequestParams = {}) =>
      this.request<ResponseDataDtoBoolean, any>({
        path: `/sms/set-sms-ussd`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMS API
     * @name SetSmsUssd3
     * @summary PlayMobile sms kelganda o'qib olish uchun
     * @request POST:/sms/set-sms-ussd
     * @secure
     */
    setSmsUssd3: (params: RequestParams = {}) =>
      this.request<ResponseDataDtoBoolean, any>({
        path: `/sms/set-sms-ussd`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMS API
     * @name SetSmsStateEskiz2
     * @summary Eskiz uchun SMS statusini olish
     * @request GET:/sms/set-sms-state-eskiz
     * @secure
     */
    setSmsStateEskiz2: (
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
        path: `/sms/set-sms-state-eskiz`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMS API
     * @name SetSmsStateEskiz3
     * @summary Eskiz uchun SMS statusini olish
     * @request POST:/sms/set-sms-state-eskiz
     * @secure
     */
    setSmsStateEskiz3: (
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
        path: `/sms/set-sms-state-eskiz`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMS API
     * @name SetSmsState
     * @summary Getting playMobile sms response state
     * @request GET:/sms/set-sms-state
     * @secure
     */
    setSmsState: (params: RequestParams = {}) =>
      this.request<ResponseDataDtoBoolean, any>({
        path: `/sms/set-sms-state`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMS API
     * @name SetSmsState1
     * @summary Getting playMobile sms response state
     * @request POST:/sms/set-sms-state
     * @secure
     */
    setSmsState1: (params: RequestParams = {}) =>
      this.request<ResponseDataDtoBoolean, any>({
        path: `/sms/set-sms-state`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMS API
     * @name SetRabbitByStatus2
     * @summary Exceldan yuklab olib qo'lda jo'natish uchun ishlatiladi
     * @request GET:/sms/set-rabbit-by-status
     * @secure
     */
    setRabbitByStatus2: (params: RequestParams = {}) =>
      this.request<ResponseDataDtoInteger, any>({
        path: `/sms/set-rabbit-by-status`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMS API
     * @name SetRabbitByStatus3
     * @summary Exceldan yuklab olib qo'lda jo'natish uchun ishlatiladi
     * @request POST:/sms/set-rabbit-by-status
     * @secure
     */
    setRabbitByStatus3: (params: RequestParams = {}) =>
      this.request<ResponseDataDtoInteger, any>({
        path: `/sms/set-rabbit-by-status`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMS API
     * @name SendSms2
     * @request GET:/sms/sendSms
     * @secure
     */
    sendSms2: (
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
        path: `/sms/sendSms`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMS API
     * @name SendSms3
     * @request POST:/sms/sendSms
     * @secure
     */
    sendSms3: (
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
        path: `/sms/sendSms`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMS API
     * @name SaveBlackList1
     * @summary Ushbu telefon raqamiga Smsni yubormaydigan qilish uchun
     * @request POST:/sms/send-black-list
     * @secure
     */
    saveBlackList1: (
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
        path: `/sms/send-black-list`,
        method: "POST",
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
