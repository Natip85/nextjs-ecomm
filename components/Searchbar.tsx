"use client";
import { useRouter } from "next/navigation";
import qs from "query-string";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

type Props = {};

const Searchbar = (props: Props) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      searchTerm: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (!data.searchTerm) return router.push("/");

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: {
          searchTerm: data.searchTerm,
        },
      },
      { skipNull: true }
    );

    router.push(url);
    reset();
  };
  return (
    <div className="flex items-center">
      <input
        {...register("searchTerm")}
        autoComplete="off"
        placeholder="Explore E-shop"
        type="text"
        className="p-2 border border-gray-300 rounded-1md focus:outline-none focus:border-[0.5px] focus:border-slate-500 w-80"
      />
      <button
        className="bg-slate-700 hover:opacity-80 text-white p-2 rounded-r-md"
        onClick={handleSubmit(onSubmit)}
      >
        Search
      </button>
    </div>
  );
};

export default Searchbar;
