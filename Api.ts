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

export interface ErrorDto {
  /** @format int32 */
  status?: number;
  message?: string;
}

export interface LanguageDto {
  language?: string;
}

export interface UserAttachRoleDto {
  /** @format int64 */
  userId?: number;
  /** @format int64 */
  roleId?: number;
}

export interface AttachPermissionDto {
  /** @format int64 */
  permissionId?: number;
  /** @format int64 */
  roleId?: number;
}

export interface OrderUpdateDto {
  description?: string;
  /** @format int64 */
  orderId?: number;
}

export interface FlatUpdateDto {
  /** @format int64 */
  id?: number;
  /** @format double */
  price?: number;
  /** @format int32 */
  number?: number;
  /** @format int64 */
  flatSchemaId?: number;
  /** @format int64 */
  entranceId?: number;
  /** @format int32 */
  floor?: number;
}

export interface FlatUpdateDtos {
  deletes?: number[];
  updateDtos?: FlatUpdateDto[];
}

export interface FloorCopyDto {
  /** @format int32 */
  sourceFloor?: number;
  /** @format int32 */
  targetFloor?: number;
  /** @format int64 */
  entranceId?: number;
}

export interface UserCreateDto {
  password?: string;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  pinfl?: string;
  phoneNumber?: string;
  /** @format int64 */
  roleId?: number;
  /** @format int64 */
  companyId?: number;
}

export interface RoomCreateDto {
  /** @format double */
  area: number;
  /** @format int64 */
  roomTypeId: number;
}

export interface SchemaUpdateDto {
  /** @format int64 */
  id?: number;
  nameUz: string;
  nameRu: string;
  /** @format double */
  totalArea: number;
  /** @format double */
  livingArea: number;
  /** @format int64 */
  blockId: number;
  /** @format int64 */
  flatTypeId: number;
  /** @format int64 */
  schemaTypeId: number;
  photoGuids?: string[];
  rooms: RoomCreateDto[];
}

export interface SchemaCreateDto {
  nameUz: string;
  nameRu: string;
  /** @format double */
  totalArea: number;
  /** @format double */
  livingArea: number;
  /** @format int64 */
  blockId: number;
  /** @format int64 */
  flatTypeId: number;
  /** @format int64 */
  schemaTypeId: number;
  photoGuids?: string[];
  rooms: RoomCreateDto[];
}

export interface ReferenceModifyDto {
  /** @format int64 */
  id?: number;
  nameUz?: string;
  nameRu?: string;
}

export interface ReferenceParentModifyDto {
  /** @format int64 */
  id?: number;
  nameUz?: string;
  nameRu?: string;
  /** @format int64 */
  parentId?: number;
}

export interface ReceiptCreateDto {
  /** @format date */
  contractDate?: string;
  contractNumber?: string;
  receipt?: string;
  /** @format date */
  receiptDate?: string;
  guid?: string;
  /** @format int64 */
  flatId?: number;
}

export interface PermissionDto {
  /** @format int64 */
  id?: number;
  name?: string;
}

export interface OrderCreateDto {
  fio?: string;
  phone?: string;
  /** @format int64 */
  flatId?: number;
}

export interface MobileRequestDto {
  pinfl: string;
  result: boolean;
}

export interface JwtResponse {
  token?: string;
}

export interface FlatCreateDto {
  /** @format double */
  price?: number;
  /** @format int32 */
  number?: number;
  /** @format int32 */
  floor?: number;
  /** @format int64 */
  flatSchemaId?: number;
  /** @format int64 */
  schemaTypeId?: number;
}

export interface FlatsCreateDto {
  isSameEntrance?: boolean;
  /** @format int64 */
  entranceId?: number;
  /** @format int64 */
  blockId?: number;
  flats?: Record<string, FlatCreateDto[]>;
}

export interface EntranceCreateDto {
  number?: string;
  /** @format int64 */
  blockId?: number;
}

export interface EntranceCopyDto {
  /** @format int64 */
  copyEntrance?: number;
  /** @format int64 */
  toCopy?: number;
}

export interface ContractCreateDto {
  /** @format date */
  contractDate?: string;
  contractNumber?: string;
  pinfl?: string;
  fio?: string;
  guid?: string;
  /** @format int64 */
  flatId?: number;
}

export interface ComplexUpdateDto {
  /** @format int64 */
  id: number;
  name: string;
  /** @format int32 */
  longitude?: number;
  /** @format int32 */
  latitude?: number;
  /** @format date */
  endDate?: string;
  description?: string;
  /** @format int64 */
  classId: number;
  /** @format int64 */
  processStateId: number;
  /** @format int64 */
  materialTypeId: number;
  complexDetails?: number[];
  photoGuids?: string[];
  documentGuids?: string[];
}

export interface ComplexChangesStateDto {
  complexIds?: number[];
  isResponse?: boolean;
}

export interface ComplexCreateDto {
  name: string;
  /** @format int32 */
  longitude?: number;
  /** @format int32 */
  latitude?: number;
  /** @format date */
  endDate?: string;
  description?: string;
  address?: string;
  /** @format int64 */
  price?: number;
  /** @format int64 */
  spPriceId?: number;
  /** @format int64 */
  spCurrencyId?: number;
  /** @format int64 */
  classId: number;
  /** @format int64 */
  processStateId: number;
  /** @format int64 */
  materialTypeId: number;
  complexDetails?: number[];
  photoGuids?: string[];
  documentGuids?: string[];
}

export interface ComplexConfirmCreateDto {
  /** @format int64 */
  userId: number;
  /** @format int64 */
  complexId: number;
  description?: string;
  isAccept?: boolean;
}

export interface ComplexChangeStateDto {
  /** @format int64 */
  complexId?: number;
  isResponse?: boolean;
}

export interface CompanyCreateDto {
  name?: string;
  tin?: string;
  /** @format int64 */
  spCompanyId?: number;
}

export interface BlockUpdateDto {
  /** @format int64 */
  id: number;
  number: string;
  /** @format int32 */
  entranceCount?: number;
  /** @format int32 */
  maxFloorCount?: number;
  /** @format int64 */
  complexId: number;
  /** @format date */
  endDate?: string;
  blockDetails?: number[];
  photoGuids?: string[];
}

export interface BlockCreateDto {
  number: string;
  /** @format int32 */
  entranceCount?: number;
  /** @format int32 */
  maxFloorCount?: number;
  /** @format int64 */
  complexId: number;
  /** @format date */
  endDate?: string;
  blockDetails?: number[];
  photoGuids?: string[];
}

export interface BlockDetailCreateDto {
  /** @format int64 */
  spDetailId?: number;
  /** @format int64 */
  blockId?: number;
}

export interface JwtRequest {
  userName?: string;
  password?: string;
}

export interface ESITokeDto {
  code?: string;
  state?: string;
  lang?: string;
}

export interface ReferenceDto {
  /** @format int64 */
  id?: number;
  name?: string;
}

export interface UserDto {
  /** @format int64 */
  id?: number;
  username?: string;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  pinfl?: string;
  phoneNumber?: string;
  language?: string;
  role?: string;
  companyName?: string;
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

export interface ResponsePagingDTOUserDto {
  /** @format int32 */
  count?: number;
  /** @format int64 */
  totalCount?: number;
  items?: UserDto[];
}

export interface SchemaDto {
  /** @format int64 */
  id?: number;
  name?: string;
  /** @format double */
  totalArea?: number;
  /** @format double */
  livingArea?: number;
  /** @format int64 */
  blockId?: number;
  blockNumber?: string;
  spFlatTypeDto?: SpFlatTypeDto;
}

export interface SpFlatTypeDto {
  /** @format int64 */
  id?: number;
  name?: string;
}

export interface RoomDto {
  /** @format int64 */
  id?: number;
  /** @format double */
  area?: number;
  roomName?: string;
  /** @format int64 */
  roomTypeId?: number;
}

export interface SchemaFullDto {
  /** @format int64 */
  id?: number;
  nameUz?: string;
  nameRu?: string;
  /** @format double */
  totalArea?: number;
  /** @format double */
  livingArea?: number;
  /** @format int64 */
  blockId?: number;
  spFlatTypeDto?: SpFlatTypeDto;
  guids?: string[];
  rooms?: RoomDto[];
}

export interface SchemaDetailDto {
  details?: RoomDto[];
  fileGuids?: string[];
}

export interface SpDetailsDto {
  /** @format int64 */
  id?: number;
  name?: string;
}

export interface SpRoomTypeDto {
  /** @format int64 */
  id?: number;
  name?: string;
}

export interface SpRegionDto {
  /** @format int64 */
  id?: number;
  name?: string;
}

export interface SpObjectTypeDto {
  /** @format int64 */
  id?: number;
  name?: string;
}

export interface SpFlatStateDto {
  /** @format int64 */
  id?: number;
  name?: string;
}

export interface SpFileTypeDto {
  /** @format int64 */
  id?: number;
  name?: string;
}

export interface SpDistrictDto {
  /** @format int64 */
  id?: number;
  name?: string;
  /** @format int64 */
  regionId?: number;
}

export interface SpComplexStateDto {
  /** @format int64 */
  id?: number;
  name?: string;
}

export interface SpComplexMaterialTypeDto {
  /** @format int64 */
  id?: number;
  name?: string;
}

export interface SpComplexClassDto {
  /** @format int64 */
  id?: number;
  name?: string;
}

export interface SpCompanyDto {
  /** @format int64 */
  id?: number;
  name?: string;
}

export interface SpAreaDto {
  /** @format int64 */
  id?: number;
  name?: string;
  /** @format int64 */
  districtId?: number;
}

export interface ResponsePagingDTOPermissionDto {
  /** @format int32 */
  count?: number;
  /** @format int64 */
  totalCount?: number;
  items?: PermissionDto[];
}

export interface OrderDto {
  /** @format int64 */
  id?: number;
  fio?: string;
  phone?: string;
  description?: string;
}

export interface ResponsePagingDTOOrderDto {
  /** @format int32 */
  count?: number;
  /** @format int64 */
  totalCount?: number;
  items?: OrderDto[];
}

export interface FlatFullDetailDto {
  /** @format int64 */
  id?: number;
  /** @format int32 */
  floor?: number;
  /** @format int32 */
  flatNumber?: number;
  uploadContract?: boolean;
  /** @format int64 */
  entranceId?: number;
  rooms?: RoomDto[];
  photoGuids?: string[];
  state?: string;
  /** @format int64 */
  stateId?: number;
}

export interface EntranceDetailDto {
  entranceName?: string;
  flats?: FlatDetailDto[];
}

export interface FlatDetailDto {
  /** @format int64 */
  id?: number;
  /** @format int32 */
  floor?: number;
  /** @format int32 */
  flatNumber?: number;
  /** @format double */
  price?: number;
  uploadContract?: boolean;
  /** @format int64 */
  entranceId?: number;
  /** @format int64 */
  typeId?: number;
  /** @format int64 */
  flatStateId?: number;
  /** @format int64 */
  flatSchemaId?: number;
  flatStateName?: string;
  flatTypeName?: string;
}

export interface EntranceDto {
  /** @format int64 */
  id?: number;
  number?: string;
  blockName?: string;
}

export interface ComplexCustomDto {
  /** @format int64 */
  id?: number;
  name?: string;
  /** @format int32 */
  longitude?: number;
  /** @format int32 */
  latitude?: number;
  endDate?: string;
  description?: string;
  address?: string;
  /** @format int64 */
  stateId?: number;
  /** @format int64 */
  price?: number;
  /** @format int64 */
  priceId?: number;
  priceName?: string;
  /** @format int64 */
  currencyId?: number;
  currencyName?: string;
  stateName?: string;
  /** @format int64 */
  processStateId?: number;
  processStateName?: string;
  /** @format int64 */
  objectTypeId?: number;
  objectTypeName?: string;
  /** @format int64 */
  companyId?: number;
  companyName?: string;
  /** @format int64 */
  regionId?: number;
  regionName?: string;
  /** @format int64 */
  districtId?: number;
  districtName?: string;
  /** @format int64 */
  areaId?: number;
  areaName?: string;
  /** @format int64 */
  classId?: number;
  className?: string;
  /** @format int64 */
  materialTypeId?: number;
  materialTypeName?: string;
  /** @format int32 */
  blockCount?: number;
  /** @format int32 */
  flatCount?: number;
  /** @format int32 */
  comfortCount?: number;
  /** @format int32 */
  confirmCount?: number;
  /** @format int32 */
  photoCount?: number;
  /** @format int32 */
  fileCount?: number;
  complexDetails?: ReferenceDto[];
  photoGuids?: string[];
  documentGuids?: string[];
}

export interface ComplexCustomsDto {
  /** @format int64 */
  id?: number;
  name?: string;
  /** @format int32 */
  longitude?: number;
  /** @format int32 */
  latitude?: number;
  endDate?: string;
  description?: string;
  address?: string;
  /** @format int64 */
  stateId?: number;
  /** @format int64 */
  price?: number;
  /** @format int64 */
  priceId?: number;
  priceName?: string;
  /** @format int64 */
  currencyId?: number;
  currencyName?: string;
  stateName?: string;
  /** @format int64 */
  processStateId?: number;
  processStateName?: string;
  /** @format int64 */
  objectTypeId?: number;
  objectTypeName?: string;
  /** @format int64 */
  companyId?: number;
  companyName?: string;
  /** @format int64 */
  regionId?: number;
  regionName?: string;
  /** @format int64 */
  districtId?: number;
  districtName?: string;
  /** @format int64 */
  areaId?: number;
  areaName?: string;
  /** @format int64 */
  classId?: number;
  className?: string;
  /** @format int64 */
  materialTypeId?: number;
  materialTypeName?: string;
  /** @format int32 */
  blockCount?: number;
  /** @format int32 */
  flatCount?: number;
  /** @format int32 */
  comfortCount?: number;
  /** @format int32 */
  confirmCount?: number;
  /** @format int32 */
  photoCount?: number;
  /** @format int32 */
  fileCount?: number;
  complexDetails?: number[];
  photoGuids?: string[];
  documentGuids?: string[];
}

export interface ResponsePagingDTOComplexCustomsDto {
  /** @format int32 */
  count?: number;
  /** @format int64 */
  totalCount?: number;
  items?: ComplexCustomsDto[];
}

export interface BlockDashboardDto {
  /** @format int64 */
  id?: number;
  complexName?: string;
  /** @format int64 */
  complexId?: number;
  /** @format int32 */
  complexState?: number;
  blockNumber?: string;
  /** @format int32 */
  comfortCount?: number;
  /** @format int32 */
  entranceCount?: number;
  /** @format int32 */
  photoCount?: number;
}

export interface ResponsePagingDTOBlockDashboardDto {
  /** @format int32 */
  count?: number;
  /** @format int64 */
  totalCount?: number;
  items?: BlockDashboardDto[];
}

export interface ShortDto {
  /** @format int64 */
  id?: number;
  name?: string;
}

export interface FlatShortDetailDto {
  /** @format int64 */
  id?: number;
  /** @format int32 */
  floor?: number;
  /** @format int32 */
  number?: number;
  /** @format double */
  totalArea?: number;
  schemaName?: string;
  endDate?: string;
}

export interface FlatDashboardDto {
  /** @format int64 */
  id?: number;
  blockNumber?: string;
  /** @format int32 */
  flatNumber?: number;
  /** @format int32 */
  floor?: number;
  /** @format int64 */
  flatTypeId?: number;
  flatTypeName?: string;
  /** @format int64 */
  flatStateId?: number;
  flatStateName?: string;
  /** @format double */
  totalArea?: number;
  /** @format double */
  livingArea?: number;
  /** @format int32 */
  orderCount?: number;
  entranceNumber?: string;
  uploadContract?: boolean;
  contractFileGuid?: string;
  contractNumber?: string;
  receiptFileGuid?: string;
  receipt?: string;
}

export interface ResponsePagingDTOFlatDashboardDto {
  /** @format int32 */
  count?: number;
  /** @format int64 */
  totalCount?: number;
  items?: FlatDashboardDto[];
}

export interface FlatGovernmentDto {
  /** @format int64 */
  id?: number;
  complexName?: string;
  blockNumber?: string;
  entranceNumber?: string;
  flatNumber?: string;
  schemaName?: string;
  /** @format double */
  schemaTotalArea?: number;
  flatStateId?: string;
  flatStateName?: string;
  contractNumber?: string;
  contractFileGuid?: string;
  receipt?: string;
  receiptFileGuid?: string;
  /** @format int64 */
  companyId?: number;
  companyName?: string;
}

export interface ResponsePagingDTOFlatGovernmentDto {
  /** @format int32 */
  count?: number;
  /** @format int64 */
  totalCount?: number;
  items?: FlatGovernmentDto[];
}

export interface FloorDetailDto {
  /** @format int64 */
  entranceId?: number;
  /** @format int32 */
  floor?: number;
  flats?: FlatDetailDto[];
}

export interface ContractDto {
  /** @format int64 */
  id?: number;
  contractDate?: string;
  contractNumber?: string;
  pinfl?: string;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  fileGuid?: string;
  /** @format int64 */
  flatId?: number;
  /** @format int32 */
  flatNumber?: number;
  /** @format int32 */
  floor?: number;
  /** @format double */
  totalArea?: number;
  schemaName?: string;
  processStateName?: string;
  blockNumber?: string;
  complexName?: string;
  companyName?: string;
}

export interface ResponsePagingDTOContractDto {
  /** @format int32 */
  count?: number;
  /** @format int64 */
  totalCount?: number;
  items?: ContractDto[];
}

export interface NameDto {
  /** @format int64 */
  id?: number;
  name?: string;
  /** @format int32 */
  tcount?: number;
}

export interface AppFileDto {
  fileGuid?: string;
  name?: string;
  contentType?: string;
  /** @format int64 */
  fileTypeId?: number;
  fileTypeName?: string;
}

export interface ComplexDetailDto {
  /** @format int64 */
  complexDetailId?: number;
  /** @format int64 */
  spDetailId?: number;
  detailName?: string;
  /** @format int64 */
  complexId?: number;
  complexName?: string;
}

export interface ComplexGovernmentDto {
  /** @format int64 */
  id?: number;
  name?: string;
  address?: string;
  /** @format int64 */
  companyId?: number;
  companyName?: string;
  /** @format int64 */
  areaId?: number;
  areaName?: string;
  /** @format int64 */
  processStateId?: number;
  processStateName?: string;
  /** @format int64 */
  stateId?: number;
  stateName?: string;
  /** @format int32 */
  blockCount?: number;
  /** @format int32 */
  freeFlatCount?: number;
  /** @format int32 */
  soldFlatCount?: number;
  isVisible?: boolean;
  /** @format int32 */
  photoCount?: number;
  /** @format int32 */
  fileCount?: number;
}

export interface ResponsePagingDTOComplexGovernmentDto {
  /** @format int32 */
  count?: number;
  /** @format int64 */
  totalCount?: number;
  items?: ComplexGovernmentDto[];
}

export interface ComplexArchitectDto {
  /** @format int64 */
  id?: number;
  name?: string;
  /** @format int64 */
  companyId?: number;
  companyName?: string;
  address?: string;
  endDate?: string;
  /** @format int64 */
  areaId?: number;
  areaName?: string;
  /** @format int64 */
  classId?: number;
  className?: string;
  /** @format int64 */
  materialTypeId?: number;
  materialTypeName?: string;
  /** @format int64 */
  objectTypeId?: number;
  objectTypeName?: string;
  /** @format int64 */
  processStateId?: number;
  processStateName?: string;
  /** @format int64 */
  stateId?: number;
  /** @format int32 */
  blockCount?: number;
  /** @format int32 */
  flatCount?: number;
  /** @format int32 */
  photoCount?: number;
  /** @format int32 */
  fileCount?: number;
}

export interface ResponsePagingDTOComplexArchitectDto {
  /** @format int32 */
  count?: number;
  /** @format int64 */
  totalCount?: number;
  items?: ComplexArchitectDto[];
}

export interface ComplexConfirmDto {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  userId?: number;
  /** @format int64 */
  complexId?: number;
  description?: string;
  isAccept?: boolean;
}

export interface CompanyDto {
  /** @format int64 */
  id?: number;
  name?: string;
  tin?: string;
}

export interface ResponsePagingDTOCompanyDto {
  /** @format int32 */
  count?: number;
  /** @format int64 */
  totalCount?: number;
  items?: CompanyDto[];
}

export interface BlockDto {
  /** @format int64 */
  id?: number;
  number?: string;
  /** @format int32 */
  entranceCount?: number;
  /** @format int32 */
  maxFloorCount?: number;
  complexName?: string;
  /** @format int64 */
  complexId?: number;
  /** @format int64 */
  complexStateId?: number;
  /** @format date */
  endDate?: string;
  blockDetails?: ReferenceDto[];
  fileGuids?: AppFileDto[];
}

export interface BlockDetailDto {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  spDetailId?: number;
  detailName?: string;
  /** @format int64 */
  blockId?: number;
  blockNumber?: string;
}

export interface BlockFlatsDto {
  number?: string;
  /** @format int32 */
  totalCount?: number;
  /** @format int32 */
  norCount?: number;
  /** @format int32 */
  norFreeCount?: number;
  /** @format int32 */
  norBookedCount?: number;
  /** @format int32 */
  norSoldCount?: number;
  /** @format int32 */
  rcount?: number;
  /** @format int32 */
  rfreeCount?: number;
  /** @format int32 */
  rbookedCount?: number;
  /** @format int32 */
  rsoldCount?: number;
}

export interface ResponsePagingDTOBlockFlatsDto {
  /** @format int32 */
  count?: number;
  /** @format int64 */
  totalCount?: number;
  items?: BlockFlatsDto[];
}

export interface AuthSecurityDto {
  clientId?: string;
  state?: string;
}

export interface DeleteDto {
  /** @format int64 */
  id?: number;
}

export interface IdDto {
  /** @format int64 */
  id?: number;
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
  public baseUrl: string = "http://api.yangiyolshahar.uz/ga-admin-api";
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
 * @title My Home Admin API
 * @version 1.0
 * @baseUrl http://api.yangiyolshahar.uz/ga-admin-api
 *
 * My Home - Admin
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags Users
     * @name ChangeLanguage
     * @summary Foydalanuvchining tilini o'zgartirish
     * @request PUT:/api/users/change-language
     * @secure
     */
    changeLanguage: (data: LanguageDto, params: RequestParams = {}) =>
      this.request<void, ErrorDto>({
        path: `/api/users/change-language`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name AttachRole
     * @summary Foydalanuvchiga Role briktrish
     * @request PUT:/api/users/attach-role
     * @secure
     */
    attachRole: (data: UserAttachRoleDto, params: RequestParams = {}) =>
      this.request<void, ErrorDto>({
        path: `/api/users/attach-role`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Permission
     * @name AttachPermission
     * @summary Boshqaruvlarga huquq biritkirish
     * @request PUT:/api/permissions/attach
     * @secure
     */
    attachPermission: (data: AttachPermissionDto, params: RequestParams = {}) =>
      this.request<object, ErrorDto>({
        path: `/api/permissions/attach`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Order
     * @name Update
     * @summary Buyurtmani o'zgartirish
     * @request PUT:/api/orders/update
     * @secure
     */
    update: (data: OrderUpdateDto, params: RequestParams = {}) =>
      this.request<object, ErrorDto>({
        path: `/api/orders/update`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Flat
     * @name Update1
     * @summary Xonadonni yangilash
     * @request PUT:/api/flats/update
     * @secure
     */
    update1: (data: FlatUpdateDtos, params: RequestParams = {}) =>
      this.request<object, ErrorDto>({
        path: `/api/flats/update`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Flat
     * @name FloorCopy
     * @summary Kirish qismdagi qavatlarni nusxalash {sourceFloor -> nusxa berivchi qavat, targetFloor nusxa oluvchi qavat}
     * @request PUT:/api/flats/floor-copy
     * @secure
     */
    floorCopy: (data: FloorCopyDto, params: RequestParams = {}) =>
      this.request<boolean, ErrorDto>({
        path: `/api/flats/floor-copy`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name Create
     * @summary Yangi Foydalanuvchi qo'shish
     * @request POST:/api/users/create
     * @secure
     */
    create: (data: UserCreateDto, params: RequestParams = {}) =>
      this.request<void, ErrorDto>({
        path: `/api/users/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Test
     * @name GetAllSp
     * @summary Applicationni tetslash uchun
     * @request POST:/api/test/sp
     * @secure
     */
    getAllSp: (params: RequestParams = {}) =>
      this.request<string[], ErrorDto>({
        path: `/api/test/sp`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Schemas
     * @name Update2
     * @summary Sxemani taxrirlash
     * @request POST:/api/schemas/update
     * @secure
     */
    update2: (data: SchemaUpdateDto, params: RequestParams = {}) =>
      this.request<object, ErrorDto>({
        path: `/api/schemas/update`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Schemas
     * @name Create1
     * @summary Yangi Sxema qo'shish
     * @request POST:/api/schemas/create
     * @secure
     */
    create1: (data: SchemaCreateDto, params: RequestParams = {}) =>
      this.request<object, ErrorDto>({
        path: `/api/schemas/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name SpRoomTypeModify
     * @summary Xona turi qo'shish yoki o'zgartirish
     * @request POST:/api/reference-modify/sp-room-type-modify
     * @secure
     */
    spRoomTypeModify: (data: ReferenceModifyDto, params: RequestParams = {}) =>
      this.request<boolean, ErrorDto>({
        path: `/api/reference-modify/sp-room-type-modify`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name SpObjectTypeModify
     * @summary Obyekt turi qo'shish yoki o'zgartirish
     * @request POST:/api/reference-modify/sp-object-type-modify
     * @secure
     */
    spObjectTypeModify: (data: ReferenceModifyDto, params: RequestParams = {}) =>
      this.request<boolean, ErrorDto>({
        path: `/api/reference-modify/sp-object-type-modify`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name SpFlatTypeModify
     * @summary Xonadon turi qo'shish yoki o'zgartirish
     * @request POST:/api/reference-modify/sp-flat-type-modify
     * @secure
     */
    spFlatTypeModify: (data: ReferenceModifyDto, params: RequestParams = {}) =>
      this.request<boolean, ErrorDto>({
        path: `/api/reference-modify/sp-flat-type-modify`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name SpFlatStateModify
     * @summary Xonadon xolati qo'shish yoki o'zgartirish
     * @request POST:/api/reference-modify/sp-flat-state-modify
     * @secure
     */
    spFlatStateModify: (data: ReferenceModifyDto, params: RequestParams = {}) =>
      this.request<boolean, ErrorDto>({
        path: `/api/reference-modify/sp-flat-state-modify`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name SpDetailModify
     * @summary Majmua holatini qo'shish yoki o'zgartirish
     * @request POST:/api/reference-modify/sp-detail-modify
     * @secure
     */
    spDetailModify: (data: ReferenceModifyDto, params: RequestParams = {}) =>
      this.request<boolean, ErrorDto>({
        path: `/api/reference-modify/sp-detail-modify`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name SpComplexStateModify
     * @summary Majmua holatini qo'shish yoki o'zgartirish
     * @request POST:/api/reference-modify/sp-complex-state-modify
     * @secure
     */
    spComplexStateModify: (data: ReferenceModifyDto, params: RequestParams = {}) =>
      this.request<boolean, ErrorDto>({
        path: `/api/reference-modify/sp-complex-state-modify`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name SpComplexPriceModify
     * @summary Complex narx qo'shish yoki o'zgartirish
     * @request POST:/api/reference-modify/sp-complex-price-modify
     * @secure
     */
    spComplexPriceModify: (data: ReferenceModifyDto, params: RequestParams = {}) =>
      this.request<boolean, ErrorDto>({
        path: `/api/reference-modify/sp-complex-price-modify`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name SpComplexMaterialTypeModify
     * @summary Majmua material turi qo'shish yoki o'zgartirish
     * @request POST:/api/reference-modify/sp-complex-material-type-modify
     * @secure
     */
    spComplexMaterialTypeModify: (data: ReferenceModifyDto, params: RequestParams = {}) =>
      this.request<boolean, ErrorDto>({
        path: `/api/reference-modify/sp-complex-material-type-modify`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name SpComplexClassModify
     * @summary Majmua sinfini qo'shish yoki o'zgartirish
     * @request POST:/api/reference-modify/sp-complex-class-modify
     * @secure
     */
    spComplexClassModify: (data: ReferenceModifyDto, params: RequestParams = {}) =>
      this.request<boolean, ErrorDto>({
        path: `/api/reference-modify/sp-complex-class-modify`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name SpCompanyModify
     * @summary Korxona turini qo'shish yoki o'zgartirish
     * @request POST:/api/reference-modify/sp-company-modify
     * @secure
     */
    spCompanyModify: (data: ReferenceModifyDto, params: RequestParams = {}) =>
      this.request<boolean, ErrorDto>({
        path: `/api/reference-modify/sp-company-modify`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name RegionModify
     * @summary Viloyat qo'shish yoki o'zgartirish
     * @request POST:/api/reference-modify/region-modify
     * @secure
     */
    regionModify: (data: ReferenceModifyDto, params: RequestParams = {}) =>
      this.request<boolean, ErrorDto>({
        path: `/api/reference-modify/region-modify`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name ProcessStateModify
     * @summary Jarayon holati qo'shish yoki o'zgartirish
     * @request POST:/api/reference-modify/process-state-modify
     * @secure
     */
    processStateModify: (data: ReferenceModifyDto, params: RequestParams = {}) =>
      this.request<boolean, ErrorDto>({
        path: `/api/reference-modify/process-state-modify`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name DistrictModify
     * @summary Tuman qo'shish yoki o'zgartirish
     * @request POST:/api/reference-modify/district-modify
     * @secure
     */
    districtModify: (data: ReferenceParentModifyDto, params: RequestParams = {}) =>
      this.request<boolean, ErrorDto>({
        path: `/api/reference-modify/district-modify`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name CurrencyModify
     * @summary Valyuta qo'shish yoki o'zgartirish
     * @request POST:/api/reference-modify/currency-modify
     * @secure
     */
    currencyModify: (data: ReferenceModifyDto, params: RequestParams = {}) =>
      this.request<boolean, ErrorDto>({
        path: `/api/reference-modify/currency-modify`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name AreaModify
     * @summary Mahalla qo'shish yoki o'zgartirish
     * @request POST:/api/reference-modify/area-modify
     * @secure
     */
    areaModify: (data: ReferenceParentModifyDto, params: RequestParams = {}) =>
      this.request<boolean, ErrorDto>({
        path: `/api/reference-modify/area-modify`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Receipt
     * @name Create2
     * @summary Yangi kvitansiya qo'shish
     * @request POST:/api/receipts/create
     * @secure
     */
    create2: (data: ReceiptCreateDto, params: RequestParams = {}) =>
      this.request<object, ErrorDto>({
        path: `/api/receipts/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Permission
     * @name Modify
     * @summary Huquqni yaratish
     * @request POST:/api/permissions/modify
     * @secure
     */
    modify: (data: PermissionDto, params: RequestParams = {}) =>
      this.request<object, ErrorDto>({
        path: `/api/permissions/modify`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Order
     * @name Create3
     * @summary Yangi buyurtma qo'shish
     * @request POST:/api/orders/create
     * @secure
     */
    create3: (data: OrderCreateDto, params: RequestParams = {}) =>
      this.request<object, ErrorDto>({
        path: `/api/orders/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mobile
     * @name OrderCreate
     * @summary Yangi buyurtma qo'shish
     * @request POST:/api/mobile/orders/create
     * @secure
     */
    orderCreate: (data: OrderCreateDto, params: RequestParams = {}) =>
      this.request<object, ErrorDto>({
        path: `/api/mobile/orders/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags FaceAuthentication
     * @name CreateAuthenticationToken
     * @summary Mobile token olish
     * @request POST:/api/mobile/auth/token
     * @secure
     */
    createAuthenticationToken: (data: MobileRequestDto, params: RequestParams = {}) =>
      this.request<JwtResponse, ErrorDto>({
        path: `/api/mobile/auth/token`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags FaceAuthentication
     * @name GetAuthenticationToken
     * @summary Mobile get token olish
     * @request POST:/api/mobile/auth/get/token
     * @secure
     */
    getAuthenticationToken: (data: MobileRequestDto, params: RequestParams = {}) =>
      this.request<object, ErrorDto>({
        path: `/api/mobile/auth/get/token`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Flat
     * @name Create4
     * @summary Yangi xonadon qo'shish
     * @request POST:/api/flats/create
     * @secure
     */
    create4: (data: FlatsCreateDto, params: RequestParams = {}) =>
      this.request<object, ErrorDto>({
        path: `/api/flats/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags File
     * @name Uploads
     * @summary Yangi Fayllar yuklash
     * @request POST:/api/files/uploads
     * @secure
     */
    uploads: (
      data: {
        files: File[];
      },
      params: RequestParams = {}
    ) =>
      this.request<string[], ErrorDto>({
        path: `/api/files/uploads`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags File
     * @name Upload
     * @summary Yangi Fayl yuklash
     * @request POST:/api/files/upload
     * @secure
     */
    upload: (
      data: {
        /** @format binary */
        file: File;
      },
      params: RequestParams = {}
    ) =>
      this.request<string, ErrorDto>({
        path: `/api/files/upload`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Entrance
     * @name Create5
     * @summary Yangi Kirish qism qo'shish
     * @request POST:/api/entrances/create
     * @secure
     */
    create5: (data: EntranceCreateDto, params: RequestParams = {}) =>
      this.request<object, ErrorDto>({
        path: `/api/entrances/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Entrance
     * @name Copy
     * @summary Kirishni xushalash
     * @request POST:/api/entrances/copy
     * @secure
     */
    copy: (data: EntranceCopyDto, params: RequestParams = {}) =>
      this.request<object, ErrorDto>({
        path: `/api/entrances/copy`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contract
     * @name Create6
     * @summary Yangi shartnoma qo'shish
     * @request POST:/api/contracts/create
     * @secure
     */
    create6: (data: ContractCreateDto, params: RequestParams = {}) =>
      this.request<object, ErrorDto>({
        path: `/api/contracts/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Complexes
     * @name Update3
     * @summary Kompleksni Taxrirlash
     * @request POST:/api/complexes/update
     * @secure
     */
    update3: (data: ComplexUpdateDto, params: RequestParams = {}) =>
      this.request<object, ErrorDto>({
        path: `/api/complexes/update`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Complexes
     * @name Send
     * @summary Kompleksni arxitekturaga jo'natish
     * @request POST:/api/complexes/send-complex
     * @secure
     */
    send: (data: ComplexChangesStateDto, params: RequestParams = {}) =>
      this.request<object, ErrorDto>({
        path: `/api/complexes/send-complex`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Complexes
     * @name Create7
     * @summary Yangi Kompleks qo'shish
     * @request POST:/api/complexes/create
     * @secure
     */
    create7: (data: ComplexCreateDto, params: RequestParams = {}) =>
      this.request<object, ErrorDto>({
        path: `/api/complexes/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ComplexConfirm
     * @name Create8
     * @summary Yangi ComplexConfirm qo'shish
     * @request POST:/api/complexes/confirm/create
     * @secure
     */
    create8: (data: ComplexConfirmCreateDto, params: RequestParams = {}) =>
      this.request<object, ErrorDto>({
        path: `/api/complexes/confirm/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Complexes
     * @name ChangeVisible
     * @summary Komplekni mobilega ko'rinish yoki ko'rinmasligi
     * @request POST:/api/complexes/change-visible
     * @secure
     */
    changeVisible: (data: ComplexChangeStateDto, params: RequestParams = {}) =>
      this.request<object, ErrorDto>({
        path: `/api/complexes/change-visible`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Complexes
     * @name ArchitectureSend
     * @summary Kompleks ustida arxitekturaning qarori
     * @request POST:/api/complexes/architecture-send-complex
     * @secure
     */
    architectureSend: (data: ComplexChangeStateDto, params: RequestParams = {}) =>
      this.request<object, ErrorDto>({
        path: `/api/complexes/architecture-send-complex`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Companies
     * @name Create9
     * @summary Yangi Kompanya qo'shish
     * @request POST:/api/companies/create
     * @secure
     */
    create9: (data: CompanyCreateDto, params: RequestParams = {}) =>
      this.request<void, ErrorDto>({
        path: `/api/companies/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blocks
     * @name Update4
     * @summary Binoni Taxrirlash
     * @request POST:/api/blocks/update
     * @secure
     */
    update4: (data: BlockUpdateDto, params: RequestParams = {}) =>
      this.request<object, ErrorDto>({
        path: `/api/blocks/update`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blocks
     * @name Create10
     * @summary Yangi Bino qo'shish
     * @request POST:/api/blocks/create
     * @secure
     */
    create10: (data: BlockCreateDto, params: RequestParams = {}) =>
      this.request<object, ErrorDto>({
        path: `/api/blocks/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BlockDetails
     * @name Create11
     * @summary Yangi Bino malumotini qo'shish
     * @request POST:/api/block-details/create
     * @secure
     */
    create11: (data: BlockDetailCreateDto, params: RequestParams = {}) =>
      this.request<object, ErrorDto>({
        path: `/api/block-details/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Login
     * @name CreateAuthenticationToken1
     * @summary Kirish login parol orqali token olish
     * @request POST:/api/auth/login
     * @secure
     */
    createAuthenticationToken1: (data: JwtRequest, params: RequestParams = {}) =>
      this.request<JwtResponse, ErrorDto>({
        path: `/api/auth/login`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Login
     * @name GetEsiToken
     * @summary ESI dan o'tgan foydalanuvchi uchun token olish
     * @request POST:/api/auth/esi-token
     * @secure
     */
    getEsiToken: (data: ESITokeDto, params: RequestParams = {}) =>
      this.request<JwtResponse, ErrorDto>({
        path: `/api/auth/esi-token`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name StaffStatisticCount
     * @summary Admin uchun quruvchi va hokimiyat hodimlar soni
     * @request GET:/api/users/staff-statistic-count
     * @secure
     */
    staffStatisticCount: (params: RequestParams = {}) =>
      this.request<Record<string, object>, ErrorDto>({
        path: `/api/users/staff-statistic-count`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name GetAllRole
     * @summary Rolelar ro'yhati
     * @request GET:/api/users/roles
     * @secure
     */
    getAllRole: (params: RequestParams = {}) =>
      this.request<ReferenceDto[], ErrorDto>({
        path: `/api/users/roles`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name Me
     * @summary Sessiyadagi foydalanuvchini olish
     * @request GET:/api/users/me
     * @secure
     */
    me: (params: RequestParams = {}) =>
      this.request<UserDto, ErrorDto>({
        path: `/api/users/me`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name GetAll
     * @summary Barcha Foydalanuvlarni olish
     * @request GET:/api/users/get-all
     * @secure
     */
    getAll: (
      query: {
        pageable: Pageable;
      },
      params: RequestParams = {}
    ) =>
      this.request<ResponsePagingDTOUserDto, ErrorDto>({
        path: `/api/users/get-all`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name ArchitectFio
     * @summary Arxitektor FIO si
     * @request GET:/api/users/architect-fio
     * @secure
     */
    architectFio: (params: RequestParams = {}) =>
      this.request<Record<string, object>, ErrorDto>({
        path: `/api/users/architect-fio`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Schemas
     * @name GetAllByBlock
     * @summary Block id bo'yicha Sxemalar ro'yxatini olish
     * @request GET:/api/schemas/list-by-block
     * @secure
     */
    getAllByBlock: (
      query: {
        /** @format int64 */
        blockId: number;
        /** @format int64 */
        typeId?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<SchemaDto[], ErrorDto>({
        path: `/api/schemas/list-by-block`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Schemas
     * @name Get
     * @summary Id bo'yicha Schema ma'lumotlarini olish
     * @request GET:/api/schemas/get/{id}
     * @secure
     */
    get: (id: number, params: RequestParams = {}) =>
      this.request<SchemaFullDto, ErrorDto>({
        path: `/api/schemas/get/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Schemas
     * @name GetByFlat
     * @summary Flat bo'yicha Schema ma'lumotlarini olish
     * @request GET:/api/schemas/get-by-flat
     * @secure
     */
    getByFlat: (
      query: {
        /** @format int64 */
        flatId: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<SchemaFullDto, ErrorDto>({
        path: `/api/schemas/get-by-flat`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Schemas
     * @name GetSchemaDetails
     * @summary Sxema id bo'yicha xonalar ro'yxatini olish
     * @request GET:/api/schemas/details
     * @secure
     */
    getSchemaDetails: (
      query: {
        /** @format int64 */
        schemaId: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<SchemaDetailDto, ErrorDto>({
        path: `/api/schemas/details`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference
     * @name GetAllSpDetails
     * @summary Qulayliklar ro'yxatni olish
     * @request GET:/api/reference/get-all-sp-details
     * @secure
     */
    getAllSpDetails: (params: RequestParams = {}) =>
      this.request<SpDetailsDto[], ErrorDto>({
        path: `/api/reference/get-all-sp-details`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference
     * @name GetAllSchemaType
     * @summary Schema turlarini olish
     * @request GET:/api/reference/get-all-schema-type
     * @secure
     */
    getAllSchemaType: (params: RequestParams = {}) =>
      this.request<ReferenceDto[], ErrorDto>({
        path: `/api/reference/get-all-schema-type`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference
     * @name GetAllRoomType
     * @summary Xonadon turlari ro'yxatni olish
     * @request GET:/api/reference/get-all-room-type
     * @secure
     */
    getAllRoomType: (params: RequestParams = {}) =>
      this.request<SpRoomTypeDto[], ErrorDto>({
        path: `/api/reference/get-all-room-type`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference
     * @name GetAllRegions
     * @summary Viloyatlar ro'yxatni olish
     * @request GET:/api/reference/get-all-region
     * @secure
     */
    getAllRegions: (params: RequestParams = {}) =>
      this.request<SpRegionDto[], ErrorDto>({
        path: `/api/reference/get-all-region`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference
     * @name GetAllProcessState
     * @summary Kompleksning jarayon ro'yhatini olish
     * @request GET:/api/reference/get-all-process-state
     * @secure
     */
    getAllProcessState: (params: RequestParams = {}) =>
      this.request<ReferenceDto[], ErrorDto>({
        path: `/api/reference/get-all-process-state`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference
     * @name GetAllObjectType
     * @summary Object turlari ro'yxatni olish
     * @request GET:/api/reference/get-all-object-type
     * @secure
     */
    getAllObjectType: (params: RequestParams = {}) =>
      this.request<SpObjectTypeDto[], ErrorDto>({
        path: `/api/reference/get-all-object-type`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference
     * @name GetAllFlatType
     * @summary Xonadon turlari ro'yxatni olish
     * @request GET:/api/reference/get-all-flat-type
     * @secure
     */
    getAllFlatType: (params: RequestParams = {}) =>
      this.request<SpFlatTypeDto[], ErrorDto>({
        path: `/api/reference/get-all-flat-type`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference
     * @name GetAllFlatState
     * @summary Xonadon statuslari ro'yxatni olish
     * @request GET:/api/reference/get-all-flat-state
     * @secure
     */
    getAllFlatState: (params: RequestParams = {}) =>
      this.request<SpFlatStateDto[], ErrorDto>({
        path: `/api/reference/get-all-flat-state`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference
     * @name GetAllFileType
     * @summary Fayl turlarining ro'yxatni olish
     * @request GET:/api/reference/get-all-file-type
     * @secure
     */
    getAllFileType: (params: RequestParams = {}) =>
      this.request<SpFileTypeDto[], ErrorDto>({
        path: `/api/reference/get-all-file-type`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference
     * @name GetAllDistrictByRegionId
     * @summary Viloyat kodi bo'yicha Tumanlar ro'yxatni olish
     * @request GET:/api/reference/get-all-district-by-region-id/{regionId}
     * @secure
     */
    getAllDistrictByRegionId: (regionId: number, params: RequestParams = {}) =>
      this.request<SpDistrictDto[], ErrorDto>({
        path: `/api/reference/get-all-district-by-region-id/${regionId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference
     * @name GetAllCurrency
     * @summary Valyutalar ro'yxatni olish
     * @request GET:/api/reference/get-all-currency
     * @secure
     */
    getAllCurrency: (params: RequestParams = {}) =>
      this.request<ReferenceDto[], ErrorDto>({
        path: `/api/reference/get-all-currency`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference
     * @name GetAllComplexStates
     * @summary Kompleks Statuslar ro'yxatni olish
     * @request GET:/api/reference/get-all-complex-state
     * @secure
     */
    getAllComplexStates: (params: RequestParams = {}) =>
      this.request<SpComplexStateDto[], ErrorDto>({
        path: `/api/reference/get-all-complex-state`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference
     * @name GetAllComplexPrice
     * @summary Complex price turlarini ro'yxatni olish
     * @request GET:/api/reference/get-all-complex-price
     * @secure
     */
    getAllComplexPrice: (params: RequestParams = {}) =>
      this.request<ReferenceDto[], ErrorDto>({
        path: `/api/reference/get-all-complex-price`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference
     * @name GetAllComplexMaterialType
     * @summary Kompleks klasslar ro'yxatni olish
     * @request GET:/api/reference/get-all-complex-material-type
     * @secure
     */
    getAllComplexMaterialType: (params: RequestParams = {}) =>
      this.request<SpComplexMaterialTypeDto[], ErrorDto>({
        path: `/api/reference/get-all-complex-material-type`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference
     * @name GetAllComplexClass
     * @summary Kompleks klasslar ro'yxatni olish
     * @request GET:/api/reference/get-all-complex-class
     * @secure
     */
    getAllComplexClass: (params: RequestParams = {}) =>
      this.request<SpComplexClassDto[], ErrorDto>({
        path: `/api/reference/get-all-complex-class`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference
     * @name GetAllCompanyType
     * @summary Korxona turlarni ro'yxatni olish
     * @request GET:/api/reference/get-all-company-type
     * @secure
     */
    getAllCompanyType: (params: RequestParams = {}) =>
      this.request<SpCompanyDto[], ErrorDto>({
        path: `/api/reference/get-all-company-type`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference
     * @name GetAllAreaByDistrictId
     * @summary Tuman kodi bo'yicha Mahhalalar ro'yxatni olish
     * @request GET:/api/reference/get-all-area-by-district-id/{districtId}
     * @secure
     */
    getAllAreaByDistrictId: (districtId: number, params: RequestParams = {}) =>
      this.request<SpAreaDto[], ErrorDto>({
        path: `/api/reference/get-all-area-by-district-id/${districtId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name GetAllSpDetails1
     * @summary Qulayliklar ro'yxatni olish
     * @request GET:/api/reference-modify/get-all-sp-details
     * @secure
     */
    getAllSpDetails1: (params: RequestParams = {}) =>
      this.request<ReferenceModifyDto[], ErrorDto>({
        path: `/api/reference-modify/get-all-sp-details`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name GetAllRoomType1
     * @summary Xonadon turlari ro'yxatni olish
     * @request GET:/api/reference-modify/get-all-room-type
     * @secure
     */
    getAllRoomType1: (params: RequestParams = {}) =>
      this.request<ReferenceModifyDto[], ErrorDto>({
        path: `/api/reference-modify/get-all-room-type`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name GetAllRegions1
     * @summary Viloyatlar ro'yxatni olish
     * @request GET:/api/reference-modify/get-all-region
     * @secure
     */
    getAllRegions1: (params: RequestParams = {}) =>
      this.request<ReferenceModifyDto[], ErrorDto>({
        path: `/api/reference-modify/get-all-region`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name GetAllProcessState1
     * @summary Kompleksning jarayon ro'yhatini olish
     * @request GET:/api/reference-modify/get-all-process-state
     * @secure
     */
    getAllProcessState1: (params: RequestParams = {}) =>
      this.request<ReferenceModifyDto[], ErrorDto>({
        path: `/api/reference-modify/get-all-process-state`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name GetAllObjectType1
     * @summary Object turlari ro'yxatni olish
     * @request GET:/api/reference-modify/get-all-object-type
     * @secure
     */
    getAllObjectType1: (params: RequestParams = {}) =>
      this.request<ReferenceModifyDto[], ErrorDto>({
        path: `/api/reference-modify/get-all-object-type`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name GetAllFlatType1
     * @summary Xonadon turlari ro'yxatni olish
     * @request GET:/api/reference-modify/get-all-flat-type
     * @secure
     */
    getAllFlatType1: (params: RequestParams = {}) =>
      this.request<ReferenceModifyDto[], ErrorDto>({
        path: `/api/reference-modify/get-all-flat-type`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name GetAllFlatState1
     * @summary Xonadon statuslari ro'yxatni olish
     * @request GET:/api/reference-modify/get-all-flat-state
     * @secure
     */
    getAllFlatState1: (params: RequestParams = {}) =>
      this.request<ReferenceModifyDto[], ErrorDto>({
        path: `/api/reference-modify/get-all-flat-state`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name GetAllFileType1
     * @summary Fayl turlarining ro'yxatni olish
     * @request GET:/api/reference-modify/get-all-file-type
     * @secure
     */
    getAllFileType1: (params: RequestParams = {}) =>
      this.request<ReferenceModifyDto[], ErrorDto>({
        path: `/api/reference-modify/get-all-file-type`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name GetAllDistrictByRegionId1
     * @summary Viloyat kodi bo'yicha Tumanlar ro'yxatni olish
     * @request GET:/api/reference-modify/get-all-district-by-region-id/{regionId}
     * @secure
     */
    getAllDistrictByRegionId1: (regionId: number, params: RequestParams = {}) =>
      this.request<ReferenceParentModifyDto[], ErrorDto>({
        path: `/api/reference-modify/get-all-district-by-region-id/${regionId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name GetAllCurrency1
     * @summary Valyutalar ro'yxatni olish
     * @request GET:/api/reference-modify/get-all-currency
     * @secure
     */
    getAllCurrency1: (params: RequestParams = {}) =>
      this.request<ReferenceModifyDto[], ErrorDto>({
        path: `/api/reference-modify/get-all-currency`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name GetAllComplexStates1
     * @summary Kompleks Statuslar ro'yxatni olish
     * @request GET:/api/reference-modify/get-all-complex-state
     * @secure
     */
    getAllComplexStates1: (params: RequestParams = {}) =>
      this.request<ReferenceModifyDto[], ErrorDto>({
        path: `/api/reference-modify/get-all-complex-state`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name GetAllComplexPrice1
     * @summary Complex price turlarini ro'yxatni olish
     * @request GET:/api/reference-modify/get-all-complex-price
     * @secure
     */
    getAllComplexPrice1: (params: RequestParams = {}) =>
      this.request<ReferenceModifyDto[], ErrorDto>({
        path: `/api/reference-modify/get-all-complex-price`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name GetAllComplexMaterialType1
     * @summary Kompleks klasslar ro'yxatni olish
     * @request GET:/api/reference-modify/get-all-complex-material-type
     * @secure
     */
    getAllComplexMaterialType1: (params: RequestParams = {}) =>
      this.request<ReferenceModifyDto[], ErrorDto>({
        path: `/api/reference-modify/get-all-complex-material-type`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name GetAllComplexClass1
     * @summary Kompleks klasslar ro'yxatni olish
     * @request GET:/api/reference-modify/get-all-complex-class
     * @secure
     */
    getAllComplexClass1: (params: RequestParams = {}) =>
      this.request<ReferenceModifyDto[], ErrorDto>({
        path: `/api/reference-modify/get-all-complex-class`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name GetAllCompanyType1
     * @summary Korxona turlarni ro'yxatni olish
     * @request GET:/api/reference-modify/get-all-company-type
     * @secure
     */
    getAllCompanyType1: (params: RequestParams = {}) =>
      this.request<ReferenceModifyDto[], ErrorDto>({
        path: `/api/reference-modify/get-all-company-type`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name GetAllAreaByDistrictId1
     * @summary Tuman kodi bo'yicha Mahhalalar ro'yxatni olish
     * @request GET:/api/reference-modify/get-all-area-by-district-id/{districtId}
     * @secure
     */
    getAllAreaByDistrictId1: (districtId: number, params: RequestParams = {}) =>
      this.request<ReferenceParentModifyDto[], ErrorDto>({
        path: `/api/reference-modify/get-all-area-by-district-id/${districtId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Permission
     * @name GetAll1
     * @summary Huquqlarni olish
     * @request GET:/api/permissions/get-all
     * @secure
     */
    getAll1: (
      query: {
        pageable: Pageable;
      },
      params: RequestParams = {}
    ) =>
      this.request<ResponsePagingDTOPermissionDto, ErrorDto>({
        path: `/api/permissions/get-all`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Order
     * @name GetAll2
     * @summary Xonadonga kelgan buyurtmalarni olish
     * @request GET:/api/orders/get-all
     * @secure
     */
    getAll2: (
      query: {
        pageable: Pageable;
        /** @format int64 */
        flatId: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<ResponsePagingDTOOrderDto, ErrorDto>({
        path: `/api/orders/get-all`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mobile
     * @name Get1
     * @summary Id xonadonni to'liq malumotlari bilan qaytarish
     * @request GET:/api/mobile/flats/get
     * @secure
     */
    get1: (
      query: {
        /** @format int64 */
        id: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<FlatFullDetailDto, ErrorDto>({
        path: `/api/mobile/flats/get`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mobile
     * @name GetEntranceFlats
     * @summary Kirish qismidagi xonadonlar olish
     * @request GET:/api/mobile/entrances/get-entrance-flats
     * @secure
     */
    getEntranceFlats: (
      query: {
        /** @format int64 */
        id: number;
        /** @format int64 */
        typeId?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<EntranceDetailDto, ErrorDto>({
        path: `/api/mobile/entrances/get-entrance-flats`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mobile
     * @name GetEntranceByBlock
     * @summary Kompleks Id bo'yicha kirishlarni olish
     * @request GET:/api/mobile/entrances/get-by-block
     * @secure
     */
    getEntranceByBlock: (
      query: {
        /** @format int64 */
        id: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<EntranceDto[], ErrorDto>({
        path: `/api/mobile/entrances/get-by-block`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mobile
     * @name GetComplex
     * @summary Id bo'yicha Kompleks ma'lumotlarini olish
     * @request GET:/api/mobile/complexes/get/{id}
     * @secure
     */
    getComplex: (id: number, params: RequestParams = {}) =>
      this.request<ComplexCustomDto, ErrorDto>({
        path: `/api/mobile/complexes/get/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mobile
     * @name GetComplexes
     * @summary Barcha Kompleks ma'lumotlarini olish
     * @request GET:/api/mobile/complexes/get-all
     * @secure
     */
    getComplexes: (
      query: {
        pageable: Pageable;
        /** @format int64 */
        companyId?: number;
        name?: string;
        /** @format int64 */
        classId?: number;
        /** @format int64 */
        materialId?: number;
        /** @format int64 */
        stateId?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<ResponsePagingDTOComplexCustomsDto, ErrorDto>({
        path: `/api/mobile/complexes/get-all`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mobile
     * @name GetBlocks
     * @summary Barcha Binolar ma'lumotlarini olish
     * @request GET:/api/mobile/blocks/get-all
     * @secure
     */
    getBlocks: (
      query: {
        pageable: Pageable;
        /** @format int64 */
        companyId?: number;
        number?: string;
        /** @format int64 */
        complexId?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<ResponsePagingDTOBlockDashboardDto, ErrorDto>({
        path: `/api/mobile/blocks/get-all`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mobile
     * @name GetBlocksShort
     * @summary Barcha Binolar ma'lumotlarini olish
     * @request GET:/api/mobile/blocks/get-all-short
     * @secure
     */
    getBlocksShort: (
      query?: {
        /** @format int64 */
        companyId?: number;
        /** @format int64 */
        complexId?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<ShortDto[], ErrorDto>({
        path: `/api/mobile/blocks/get-all-short`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags FaceAuthentication
     * @name GetGuidForFaceId
     * @summary Face Id tizimidan Guid olish
     * @request GET:/api/mobile/auth/get-guid
     * @secure
     */
    getGuidForFaceId: (
      query: {
        pinfl: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<object, ErrorDto>({
        path: `/api/mobile/auth/get-guid`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Flat
     * @name GroupFLatByResident
     * @summary Turar joylar bo'yicha xonalar sonini qaytarish
     * @request GET:/api/flats/group-by-resident
     * @secure
     */
    groupFLatByResident: (
      query: {
        /** @format int64 */
        complexId: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<Record<string, object>[], ErrorDto>({
        path: `/api/flats/group-by-resident`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Flat
     * @name GroupFLatByNoResident
     * @summary No-Turar joylar bo'yicha xonalar sonini qaytarish
     * @request GET:/api/flats/group-by-no-resident
     * @secure
     */
    groupFLatByNoResident: (
      query: {
        /** @format int64 */
        complexId: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<Record<string, object>[], ErrorDto>({
        path: `/api/flats/group-by-no-resident`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Flat
     * @name Get2
     * @summary Id xonadonni to'liq malumotlari bilan qaytarish
     * @request GET:/api/flats/get
     * @secure
     */
    get2: (
      query: {
        /** @format int64 */
        id: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<FlatFullDetailDto, ErrorDto>({
        path: `/api/flats/get`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Flat
     * @name GetShort
     * @summary Id xonadonni qisqa malumot qaytarish
     * @request GET:/api/flats/get-short
     * @secure
     */
    getShort: (
      query: {
        /** @format int64 */
        id: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<FlatShortDetailDto, ErrorDto>({
        path: `/api/flats/get-short`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Flat
     * @name GetAll3
     * @summary Parametrlar bo'yicha xonadonlarni qaytarish
     * @request GET:/api/flats/get-all
     * @secure
     */
    getAll3: (
      query: {
        pageable: Pageable;
        /** @format int64 */
        complexId?: number;
        /** @format int64 */
        blockId?: number;
        /** @format int32 */
        floor?: number;
        /** @format int32 */
        flatNumber?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<ResponsePagingDTOFlatDashboardDto, ErrorDto>({
        path: `/api/flats/get-all`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Flat
     * @name GetAllForGovernment
     * @summary Parametrlar bo'yicha xonadonlarni qaytarish
     * @request GET:/api/flats/get-all-for-government
     * @secure
     */
    getAllForGovernment: (
      query: {
        pageable: Pageable;
        /** @format int64 */
        complexId?: number;
        /** @format int64 */
        blockId?: number;
        /** @format int64 */
        flatStateId?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<ResponsePagingDTOFlatGovernmentDto, ErrorDto>({
        path: `/api/flats/get-all-for-government`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Flat
     * @name GetAllByBlockId
     * @summary Parametrlar bo'yicha xonadonlarni qaytarish
     * @request GET:/api/flats/get-all-by-block-id
     * @secure
     */
    getAllByBlockId: (
      query?: {
        /** @format int64 */
        complexId?: number;
        /** @format int64 */
        blockId?: number;
        /** @format int32 */
        floor?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<ResponsePagingDTOFlatDashboardDto, ErrorDto>({
        path: `/api/flats/get-all-by-block-id`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags File
     * @name Download
     * @summary File GUID bo'yicha faylni olish
     * @request GET:/api/files/download/{guid}
     * @secure
     */
    download: (guid: string, params: RequestParams = {}) =>
      this.request<File, ErrorDto>({
        path: `/api/files/download/${guid}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Entrance
     * @name GetEntranceFlats1
     * @summary Qavatdagi xonadonlar olish
     * @request GET:/api/entrances/get-flat-by-floor
     * @secure
     */
    getEntranceFlats1: (
      query: {
        /** @format int64 */
        entranceId: number;
        /** @format int32 */
        floor: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<FloorDetailDto, ErrorDto>({
        path: `/api/entrances/get-flat-by-floor`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Entrance
     * @name GetEntranceFloor
     * @summary Kirish qismidagi qavatlar
     * @request GET:/api/entrances/get-entrance-floors
     * @secure
     */
    getEntranceFloor: (
      query: {
        /** @format int64 */
        id: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<number[], ErrorDto>({
        path: `/api/entrances/get-entrance-floors`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Entrance
     * @name GetEntranceFlats2
     * @summary Kirish qismidagi xonadonlar olish
     * @request GET:/api/entrances/get-entrance-flats
     * @secure
     */
    getEntranceFlats2: (
      query: {
        /** @format int64 */
        id: number;
        /** @format int64 */
        typeId?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<EntranceDetailDto, ErrorDto>({
        path: `/api/entrances/get-entrance-flats`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Entrance
     * @name GetEntranceByBlock1
     * @summary Kompleks Id bo'yicha kirishlarni olish
     * @request GET:/api/entrances/get-by-block
     * @secure
     */
    getEntranceByBlock1: (
      query: {
        /** @format int64 */
        id: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<EntranceDto[], ErrorDto>({
        path: `/api/entrances/get-by-block`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contract
     * @name GetAll4
     * @summary Shartnomalarni olish
     * @request GET:/api/contracts/get-all
     * @secure
     */
    getAll4: (
      query: {
        pageable: Pageable;
        pinfl?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ResponsePagingDTOContractDto, ErrorDto>({
        path: `/api/contracts/get-all`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Complexes
     * @name GetComplexStatus
     * @summary Admin kompleks status
     * @request GET:/api/complexes/government-status
     * @secure
     */
    getComplexStatus: (params: RequestParams = {}) =>
      this.request<NameDto[], ErrorDto>({
        path: `/api/complexes/government-status`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Complexes
     * @name Get3
     * @summary Id bo'yicha Kompleks ma'lumotlarini olish
     * @request GET:/api/complexes/get/{id}
     * @secure
     */
    get3: (id: number, params: RequestParams = {}) =>
      this.request<ComplexCustomDto, ErrorDto>({
        path: `/api/complexes/get/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Complexes
     * @name GetComplexPhotos
     * @summary Kompleks Id bo'yicha Kompleks Rasmlarni olish
     * @request GET:/api/complexes/get-photos/{id}
     * @secure
     */
    getComplexPhotos: (id: number, params: RequestParams = {}) =>
      this.request<AppFileDto[], ErrorDto>({
        path: `/api/complexes/get-photos/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Complexes
     * @name GetComplexDocuments
     * @summary Kompleks Id bo'yicha Kompleks Hujatlarini olish
     * @request GET:/api/complexes/get-documents/{id}
     * @secure
     */
    getComplexDocuments: (id: number, params: RequestParams = {}) =>
      this.request<AppFileDto[], ErrorDto>({
        path: `/api/complexes/get-documents/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Complexes
     * @name GetComplexDetails
     * @summary Kompleks Id bo'yicha Kompleks Qulayliklarini olish
     * @request GET:/api/complexes/get-details/{id}
     * @secure
     */
    getComplexDetails: (id: number, params: RequestParams = {}) =>
      this.request<ComplexDetailDto[], ErrorDto>({
        path: `/api/complexes/get-details/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Complexes
     * @name GetAll5
     * @summary Barcha Kompleks ma'lumotlarini olish
     * @request GET:/api/complexes/get-all
     * @secure
     */
    getAll5: (
      query: {
        pageable: Pageable;
        /** @format int64 */
        companyId?: number;
        name?: string;
        /** @format int64 */
        classId?: number;
        /** @format int64 */
        materialId?: number;
        /** @format int64 */
        stateId?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<ResponsePagingDTOComplexCustomsDto, ErrorDto>({
        path: `/api/complexes/get-all`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Complexes
     * @name GetAllShort
     * @summary Barcha Kompleks nomi va idsini olish
     * @request GET:/api/complexes/get-all-short
     * @secure
     */
    getAllShort: (
      query?: {
        /** @format int64 */
        stateId?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<ShortDto[], ErrorDto>({
        path: `/api/complexes/get-all-short`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Complexes
     * @name GetAllGovernment
     * @summary Barcha Kompleks ma'lumotlarini olish hokimiyat uchun
     * @request GET:/api/complexes/get-all-for-government
     * @secure
     */
    getAllGovernment: (
      query: {
        pageable: Pageable;
        /** @format int64 */
        companyId?: number;
        name?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ResponsePagingDTOComplexGovernmentDto, ErrorDto>({
        path: `/api/complexes/get-all-for-government`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Complexes
     * @name GetAllArchitect
     * @summary Barcha Kompleks ma'lumotlarini olish arxitektura uchun
     * @request GET:/api/complexes/get-all-for-architect
     * @secure
     */
    getAllArchitect: (
      query: {
        pageable: Pageable;
        /** @format int64 */
        companyId?: number;
        name?: string;
        /** @format int64 */
        classId?: number;
        /** @format int64 */
        materialId?: number;
        /** @format int64 */
        stateId: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<ResponsePagingDTOComplexArchitectDto, ErrorDto>({
        path: `/api/complexes/get-all-for-architect`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ComplexConfirm
     * @name Get4
     * @summary Id bo'yicha ComplexConfirm ma'lumotlarini olish
     * @request GET:/api/complexes/confirm/get/{id}
     * @secure
     */
    get4: (id: number, params: RequestParams = {}) =>
      this.request<ComplexConfirmDto, ErrorDto>({
        path: `/api/complexes/confirm/get/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Companies
     * @name GetAll6
     * @summary Barcha Korxonalarni olish
     * @request GET:/api/companies/get-all
     * @secure
     */
    getAll6: (
      query: {
        pageable: Pageable;
      },
      params: RequestParams = {}
    ) =>
      this.request<ResponsePagingDTOCompanyDto, ErrorDto>({
        path: `/api/companies/get-all`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Companies
     * @name GetAllShort1
     * @summary Barcha Korxonalarni olish
     * @request GET:/api/companies/get-all-short
     * @secure
     */
    getAllShort1: (params: RequestParams = {}) =>
      this.request<Record<string, object>[], ErrorDto>({
        path: `/api/companies/get-all-short`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blocks
     * @name Get5
     * @summary Id bo'yicha Bino ma'lumotlarini olish
     * @request GET:/api/blocks/get/{id}
     * @secure
     */
    get5: (id: number, params: RequestParams = {}) =>
      this.request<BlockDto, ErrorDto>({
        path: `/api/blocks/get/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blocks
     * @name GetBlockPhotos
     * @summary Bino Id bo'yicha Bino filelarini olish
     * @request GET:/api/blocks/get-photos/{id}
     * @secure
     */
    getBlockPhotos: (id: number, params: RequestParams = {}) =>
      this.request<AppFileDto[], ErrorDto>({
        path: `/api/blocks/get-photos/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blocks
     * @name GetBlockDetails
     * @summary Kompleks Id bo'yicha Kompleks Qulayliklarini olish
     * @request GET:/api/blocks/get-details/{id}
     * @secure
     */
    getBlockDetails: (id: number, params: RequestParams = {}) =>
      this.request<BlockDetailDto[], ErrorDto>({
        path: `/api/blocks/get-details/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blocks
     * @name GetBlockFlats
     * @summary Blockdagi barcha kirish qisimlarini xonadonlari bilan olish
     * @request GET:/api/blocks/get-block-flats
     * @secure
     */
    getBlockFlats: (
      query: {
        /** @format int64 */
        id: number;
        /** @format int64 */
        typeId?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<EntranceDetailDto[], ErrorDto>({
        path: `/api/blocks/get-block-flats`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blocks
     * @name GetAll7
     * @summary Barcha Binolar ma'lumotlarini olish
     * @request GET:/api/blocks/get-all
     * @secure
     */
    getAll7: (
      query: {
        pageable: Pageable;
        /** @format int64 */
        companyId?: number;
        number?: string;
        /** @format int64 */
        complexId?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<ResponsePagingDTOBlockDashboardDto, ErrorDto>({
        path: `/api/blocks/get-all`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blocks
     * @name GetAllShort2
     * @summary Barcha Binolar ma'lumotlarini olish
     * @request GET:/api/blocks/get-all-short
     * @secure
     */
    getAllShort2: (
      query?: {
        /** @format int64 */
        companyId?: number;
        /** @format int64 */
        complexId?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<ShortDto[], ErrorDto>({
        path: `/api/blocks/get-all-short`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blocks
     * @name GetAllGovernment1
     * @summary Kompleksning binolari bo'yicha umumiy status
     * @request GET:/api/blocks/get-all-for-government
     * @secure
     */
    getAllGovernment1: (
      query: {
        pageable: Pageable;
        /** @format int64 */
        complexId?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<ResponsePagingDTOBlockFlatsDto, ErrorDto>({
        path: `/api/blocks/get-all-for-government`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Login
     * @name GetAllSp1
     * @summary test
     * @request GET:/api/auth/test
     * @secure
     */
    getAllSp1: (params: RequestParams = {}) =>
      this.request<string[], ErrorDto>({
        path: `/api/auth/test`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Login
     * @name GetClientSecrets
     * @summary Client id olish, esi uchun
     * @request GET:/api/auth/client-secrets
     * @secure
     */
    getClientSecrets: (params: RequestParams = {}) =>
      this.request<AuthSecurityDto, ErrorDto>({
        path: `/api/auth/client-secrets`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name Delete
     * @summary Foydalanuvchini o'chirish
     * @request DELETE:/api/users/delete
     * @secure
     */
    delete: (data: DeleteDto, params: RequestParams = {}) =>
      this.request<object, ErrorDto>({
        path: `/api/users/delete`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Schemas
     * @name Delete1
     * @summary Blockni o'chirish
     * @request DELETE:/api/schemas/delete
     * @secure
     */
    delete1: (data: DeleteDto, params: RequestParams = {}) =>
      this.request<object, ErrorDto>({
        path: `/api/schemas/delete`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name SpRoomTypeModify1
     * @summary Xona turi o'chirish
     * @request DELETE:/api/reference-modify/sp-room-type-delete
     * @secure
     */
    spRoomTypeModify1: (data: IdDto, params: RequestParams = {}) =>
      this.request<boolean, ErrorDto>({
        path: `/api/reference-modify/sp-room-type-delete`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name SpObjectTypeModify1
     * @summary Obyekt turi o'chirish
     * @request DELETE:/api/reference-modify/sp-object-type-delete
     * @secure
     */
    spObjectTypeModify1: (data: IdDto, params: RequestParams = {}) =>
      this.request<boolean, ErrorDto>({
        path: `/api/reference-modify/sp-object-type-delete`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name SpFlatTypeModify1
     * @summary Xonadon turi o'chirish
     * @request DELETE:/api/reference-modify/sp-flat-type-delete
     * @secure
     */
    spFlatTypeModify1: (data: IdDto, params: RequestParams = {}) =>
      this.request<boolean, ErrorDto>({
        path: `/api/reference-modify/sp-flat-type-delete`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name SpFlatStateModify1
     * @summary Xonadon xolati o'chirish
     * @request DELETE:/api/reference-modify/sp-flat-state-delete
     * @secure
     */
    spFlatStateModify1: (data: IdDto, params: RequestParams = {}) =>
      this.request<boolean, ErrorDto>({
        path: `/api/reference-modify/sp-flat-state-delete`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name SpDetailModify1
     * @summary Majmua holatini o'chirish
     * @request DELETE:/api/reference-modify/sp-detail-delete
     * @secure
     */
    spDetailModify1: (data: IdDto, params: RequestParams = {}) =>
      this.request<boolean, ErrorDto>({
        path: `/api/reference-modify/sp-detail-delete`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name SpComplexStateModify1
     * @summary Majmua holatini o'chirish
     * @request DELETE:/api/reference-modify/sp-complex-state-delete
     * @secure
     */
    spComplexStateModify1: (data: IdDto, params: RequestParams = {}) =>
      this.request<boolean, ErrorDto>({
        path: `/api/reference-modify/sp-complex-state-delete`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name SpComplexPriceModify1
     * @summary Complex narx o'chirish
     * @request DELETE:/api/reference-modify/sp-complex-price-delete
     * @secure
     */
    spComplexPriceModify1: (data: IdDto, params: RequestParams = {}) =>
      this.request<boolean, ErrorDto>({
        path: `/api/reference-modify/sp-complex-price-delete`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name SpComplexMaterialTypeModify1
     * @summary Majmua material turi o'chirish
     * @request DELETE:/api/reference-modify/sp-complex-material-type-delete
     * @secure
     */
    spComplexMaterialTypeModify1: (data: IdDto, params: RequestParams = {}) =>
      this.request<boolean, ErrorDto>({
        path: `/api/reference-modify/sp-complex-material-type-delete`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name SpComplexClassModify1
     * @summary Majmua sinfini o'chirish
     * @request DELETE:/api/reference-modify/sp-complex-class-delete
     * @secure
     */
    spComplexClassModify1: (data: IdDto, params: RequestParams = {}) =>
      this.request<boolean, ErrorDto>({
        path: `/api/reference-modify/sp-complex-class-delete`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name SpCompanyModify1
     * @summary Korxona turini o'chirish
     * @request DELETE:/api/reference-modify/sp-company-delete
     * @secure
     */
    spCompanyModify1: (data: IdDto, params: RequestParams = {}) =>
      this.request<boolean, ErrorDto>({
        path: `/api/reference-modify/sp-company-delete`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name RegionModify1
     * @summary Viloyat o'chirish
     * @request DELETE:/api/reference-modify/region-delete
     * @secure
     */
    regionModify1: (data: IdDto, params: RequestParams = {}) =>
      this.request<boolean, ErrorDto>({
        path: `/api/reference-modify/region-delete`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name ProcessStateModify1
     * @summary Jarayon holati o'chirish
     * @request DELETE:/api/reference-modify/process-state-delete
     * @secure
     */
    processStateModify1: (data: IdDto, params: RequestParams = {}) =>
      this.request<boolean, ErrorDto>({
        path: `/api/reference-modify/process-state-delete`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name DistrictModify1
     * @summary Tuman o'chirish
     * @request DELETE:/api/reference-modify/district-delete
     * @secure
     */
    districtModify1: (data: IdDto, params: RequestParams = {}) =>
      this.request<boolean, ErrorDto>({
        path: `/api/reference-modify/district-delete`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name CurrencyModify1
     * @summary Valyuta o'chirish
     * @request DELETE:/api/reference-modify/currency-delete
     * @secure
     */
    currencyModify1: (data: IdDto, params: RequestParams = {}) =>
      this.request<boolean, ErrorDto>({
        path: `/api/reference-modify/currency-delete`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Modify
     * @name AreaDelete
     * @summary Mahalla o'chirish
     * @request DELETE:/api/reference-modify/area-delete
     * @secure
     */
    areaDelete: (data: IdDto, params: RequestParams = {}) =>
      this.request<boolean, ErrorDto>({
        path: `/api/reference-modify/area-delete`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Complexes
     * @name Delete2
     * @summary Kompleksni o'chirish
     * @request DELETE:/api/complexes/delete
     * @secure
     */
    delete2: (data: DeleteDto, params: RequestParams = {}) =>
      this.request<object, ErrorDto>({
        path: `/api/complexes/delete`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Companies
     * @name Delete3
     * @summary Korxonani o'chirish
     * @request DELETE:/api/companies/delete
     * @secure
     */
    delete3: (data: DeleteDto, params: RequestParams = {}) =>
      this.request<object, ErrorDto>({
        path: `/api/companies/delete`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blocks
     * @name Delete4
     * @summary Blockni o'chirish
     * @request DELETE:/api/blocks/delete
     * @secure
     */
    delete4: (data: DeleteDto, params: RequestParams = {}) =>
      this.request<object, ErrorDto>({
        path: `/api/blocks/delete`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
}
