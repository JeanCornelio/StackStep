import { SVGLoader } from "@/components/shared/svg";
import { onActiveAccount } from "@/services/auth";
import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { useParams } from "react-router-dom";

type ApiError = {
  message: string;
  statusCode: number;
};

export const VerifyAccount = () => {
  const { token } = useParams();

  const { data, isLoading, isError, error } = useQuery<
    { message: string },
    AxiosError<ApiError>
  >({
    queryKey: ["Categories_Dropdown"],
    queryFn: () => onActiveAccount(token),
    retry: false,
  });

  if (isLoading) {
    return (
      <div className="flex gap-1 justify-center items-center">
        <SVGLoader />
        <h2> Validating account, please wait...</h2>
      </div>
    );
  }

  console.log();

  if (isError) {
    const message = error.response?.data.message;

    if (error.response?.data.statusCode === 409) {
      return (
        <>
          <h2 className="mb-4 text-3xl font-bold">Account activated</h2>
          <p className="text-md">
            {message}! Head to the home page and start using StackStep.
          </p>
        </>
      );
    }

    return (
      <>
        <h2 className="mb-4 text-3xl font-bold">Not a valid link</h2>
        <p className="text-md">
          Confirmation {message}. Please check the link and try again.
        </p>
      </>
    );
  }

  return (
    <>
      <h2 className="mb-4 text-3xl font-bold">Congratulations</h2>
      <p className="text-md">{data?.message}</p>
    </>
  );
};
