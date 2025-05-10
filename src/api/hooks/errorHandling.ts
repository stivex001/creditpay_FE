import { AxiosError } from "axios";
import { ApiError } from "./types";

interface ResponseData {
  message?: string;
  [key: string]: any;
}

export const handleApiError = (error: unknown): ApiError => {
  if (isAxiosError(error)) {
    const responseData = error?.response?.data as ResponseData;

    return {
      message: responseData?.message || error.message,
      status: error.response?.status || 500,
      data: responseData,
    };
  } else if (error instanceof Error) {
    return {
      message: error.message,
      status: 500,
    };
  } else {
    return {
      message: "An unknown error occurred",
      status: 500,
    };
  }
};

function isAxiosError(error: unknown): error is AxiosError {
  return (error as AxiosError).isAxiosError === true;
}

export const handleNetworkError = (error: ApiError) => {
  if (
    error?.status === 0 ||
    error?.message?.includes("network error")
  ) {
    console.error("Network error:", error.message);
  }
};

export const handleAuthenticationError = (error: ApiError) => {
  if (error.status === 401) {
    console.error("Authentication error:", error.message);
  }
};

export const handleForbiddenError = (error: ApiError) => {
  if (error.status === 403) {
    console.error("Forbidden error:", error.message);
  }
};

export const handleNotFoundError = (error: ApiError) => {
  if (error.status === 404) {
    console.error("Not found error:", error.message);
  }
};

export const handleServerError = (error: ApiError) => {
  if (error.status && error.status >= 500) {
    console.error("Server error:", error.message);
  }
};

export const globalErrorHandler = (error: unknown) => {
  const apiError = handleApiError(error);

  handleNetworkError(apiError);
  handleAuthenticationError(apiError);
  handleForbiddenError(apiError);
  handleNotFoundError(apiError);
  handleServerError(apiError);

  return apiError;
};
