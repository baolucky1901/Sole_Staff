export type RequestStatus = 'In_Progress' | 'Checking' | 'Accept' | 'Cancle' | 'Sold';

export interface RequestDtoForStaff{
  data: RequesSellSecondHandtDto[];
  success: boolean;
  message: string;
  statusCode: number;
}

export interface RequesSellSecondHandtDto {
  id: number;
  productName: string;
  brandName: string;
  quality: string;
  isFullbox: boolean;
  priceBuy: number;
  priceSell: number;
  warranty: string;
  contact: string;
  requestStatus: RequestStatus;
  userId: number;
  userName: string;
}