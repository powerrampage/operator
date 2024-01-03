export interface ResponseOauthAccount<TRoles = any> {
  userId: string;
  tin: string;
  pinfl: string;
  username: string;
  name: string;
  businessCategory?: any;
  taxpayerType?: any;
  directorName?: any;
  soato: number;
  phone?: any;
  regionCode: number;
  districtCode: number;
  levelName: string;
  organizationName: string;
  certificateId: string;
  clientIp: string;
  language?: any;
  deviceId?: any;
  applicationId?: any;
  roles: TRoles[];
  roleGroups: any[];
  created?: any;
  updated?: any;
  internalOrganizationData?: InternalOrganizationData;
}

interface InternalOrganizationData {
  soato: number;
  selectedStaffCode: string;
  selectedStaffRegionCode: number;
  selectedStaffDistrictCode: number;
  selectedRegionCode: number;
  selectedDistrictCode: number;
  ownerStaffRegionCode: number;
  ownerStaffDistrictCode: number;
  ownerRegionCode: number;
  ownerDistrictCode: number;
  selectedStaffRegionDetail: SelectedStaffRegionDetail;
  selectedStaffDistrictDetail: SelectedStaffDistrictDetail;
  selectedRegionDetail: SelectedStaffDistrictDetail;
  selectedDistrictDetail?: any;
  ownerStaffRegionDetail: SelectedStaffRegionDetail;
  ownerStaffDistrictDetail?: any;
  ownerRegionDetail?: any;
  ownerDistrictDetail?: any;
  level: number;
  organizationName: string;
  departmentId: number;
  positionId: number;
  departmentName: string;
  positionName: string;
}

interface SelectedStaffDistrictDetail {
  code: number;
  name: string;
  name_ru: string;
  name_uz_cyrl: string;
  name_uz_latn: string;
  region_id: number;
  districts_id: number;
}

interface SelectedStaffRegionDetail {
  code: number;
  name: string;
  name_ru: string;
  name_uz_cyrl: string;
  name_uz_latn: string;
  region_id: number;
  districts_id?: any;
}

interface Message {
  code: string;
  name: string;
  name_ru: string;
  name_en: string;
  name_uz_cyrl: string;
  name_uz_latn: string;
}

export interface ErrorReasonOauth {
  success: boolean;
  message: Message;
}

export interface ErrorResponse {
  success: boolean;
  reason: string;
  recordsFiltered: number;
  recordsTotal: number;
}

export interface OauthTokenResponse {
  scope: string;
  expire: number;
  access_token: string;
  token_type: string;
  refresh_token: string;
}

export interface OauthEdsTicketResponse {
  ticket: string;
}

export interface OauthLoginEdsV2Payload<TRoles = string> {
  pkcs7: string;
  ticketSessionId: string;
  userType: string;
  extraRoles: TRoles[];
}

export interface OAuthLogoutError {
  timestamp: string;
  status: number;
  error: string;
  path: string;
}

export interface OauthRefreshTokenPayload {
  grant_type: string;
  refresh_token: string;
}
