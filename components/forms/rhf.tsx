"use client";

import { useEffect } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

import { useAppSelector } from "@/app/[locale]/globalRedux/hooks";
import Loading from "@/components/ui/Loading";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { makeTelegramAPICall } from "@/app/[locale]/_actions";

type Inputs = {
  orderType: string;
  token: string;
  otherToken: string;
  blockchain: string;
  amount: number;
  wallet: string;
  name: string;
  payment: string;
  phone: string;
  contact: string;
  telegram: string;
  referral: string;
};

export default function Rhf() {
  const isBuy = useAppSelector((state) => state.generalSlice.isBuy);

  const paymentMethods = [
    { name: "Zelle", value: "Zelle" },
    { name: "Wire/ACH Transfer USA", value: "ACH_Transfer" },
    { name: "Bank of America Transfer", value: "Bank_of_America" },
    { name: "Bancolombia", value: "Bancolombia" },
    { name: "Nequi", value: "Nequi" },
    { name: "Transferencia Bancaria Colombia", value: "ACH_Colombia" },
  ];

  const contact = ["Whatsapp", "Telegram"];

  const defaultValues = {
    orderType: isBuy ? "buy" : "sell",
    token: "",
    otherToken: "",
    blockchain: "",
    amount: 0,
    wallet: "",
    name: "",
    payment: "",
    phone: "",
    contact: "",
    telegram: "",
    referral: "",
  };

  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<Inputs>({
    defaultValues: defaultValues,
  });

  useEffect(() => {
    // Reset the form to its default values
    reset(defaultValues);
  }, [isBuy, reset]);

  const watchToken = watch("token");
  const watchChain = watch("blockchain");
  const watchAmount = watch("amount");
  const watchContact = watch("contact");

  const processForm: SubmitHandler<Inputs> = async (data) => {
    try {
      // successful

      const whatsappNumber = "17542659869";

      const marketUpEmoji = "%F0%9F%93%88";
      const marketDownEmoji = "%F0%9F%93%89";
      const pointUpEmoji = "%F0%9F%91%86";

      const whatsappMessage = `${
        data.orderType === "buy" ? marketUpEmoji : marketDownEmoji
      }%20%2A${data.orderType.toUpperCase()}%2A%0A%0AI%20want%20to%20%2A${
        data.orderType
      }%2A%20%2A${
        data.orderType === "buy"
          ? "%24%20" + data.amount + "%2A%20worth%20of"
          : data.amount
      }%20%2A${
        data.token === "other" ? data.otherToken : data.token.toUpperCase()
      }%2A.%0A%0AName%3A%20%2A${data.name}%2A%0APhone%20number%3A%20%2B%2A${
        data.phone
      }%2A%0APayment%20method%3A%20%2A${data.payment}%2A%0A%0A${
        data.orderType === "buy"
          ? `Receiving address: ${data.wallet}%0AChain: ${data.blockchain}%0A`
          : ""
      }Referral: ${
        data.referral
      }%0A%0A${pointUpEmoji}%20Send%20this%20message,%20we%20will%20respond%20ASAP.`;

      const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`;

      if (data.contact === "Whatsapp") {
        const newTab = window.open(whatsappUrl, "_blank");
        newTab?.focus();

        reset(defaultValues);

        toast.success("Order Successful");
      } else if (data.contact === "Telegram") {
        const response = await makeTelegramAPICall(data);

        if (response === true) {
          reset(defaultValues);
          toast.success(
            "Order Successful, we will contact you through telegram asap"
          );
        } else if (response === false) {
          toast.error("Something went wrong, please try again");
        }
      }
    } catch (error) {
      toast.error(
        "An unexpected error occurred while submitting, please try again"
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(processForm)}
      className="flex flex-col gap-3 text-gray-700 px-10"
    >
      <input
        type="hidden"
        {...register("orderType", {
          value: isBuy ? "buy" : "sell",
        })}
      />

      <div className="flex flex-col gap-2">
        <label
          htmlFor="token"
          className="font-semibold after:content-['*'] after:ml-0.5 after:text-red-500"
        >
          Cryptocurrency
        </label>
        <div className="rounded-md border-solid border-[#E8EAED] border-[1px]">
          <select
            id="token"
            className="bg-transparent px-2 py-1 w-full focus:outline-2 focus:outline-primary"
            {...register("token", { required: "Select token" })}
          >
            <option disabled value="">
              Select a Cryptocurrency
            </option>
            <option value="usdt">Tether USDT</option>
            <option value="btc">Bitcoin BTC</option>
            <option value="eth">Ethereum ETH</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      {watchToken === "other" && (
        <div className="flex flex-col gap-2">
          <label htmlFor="otherToken" className="font-semibold">
            Name other crypto
          </label>
          <div className="rounded-md border-solid border-[#E8EAED] border-[1px]">
            <input
              type="text"
              id="otherToken"
              placeholder="MATIC"
              className="bg-transparent px-2 py-1 w-full focus:outline-2 focus:outline-primary"
              {...register("otherToken")}
            />
          </div>
        </div>
      )}

      {isBuy ? (
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="amount"
              className="font-semibold after:content-['*'] after:ml-0.5 after:text-red-500"
            >
              Amount in USD (min. $250)
            </label>
            <div className="rounded-md border-solid border-[#E8EAED] border-[1px]">
              <input
                type="number"
                id="amount"
                placeholder="5000"
                className="bg-transparent px-2 py-1 w-full focus:outline-2 focus:outline-primary"
                {...register("amount", {
                  required: "Amount is required",
                  min: {
                    value: 250,
                    message: "Amount must be greater than or equal to $150",
                  },
                })}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="blockchain"
              className="font-semibold after:content-['*'] after:ml-0.5 after:text-red-500"
            >
              Chain
            </label>
            <div className="rounded-md border-solid border-[#E8EAED] border-[1px]">
              <select
                id="blockchain"
                className="bg-transparent px-2 py-1 w-full focus:outline-2 focus:outline-primary"
                {...register("blockchain", { required: "Select blockchain" })}
              >
                <option disabled value="">
                  Select a Blockchain
                </option>
                <option value="bep20">Binance Smart Chain (BEP20)</option>
                <option value="trc20">TRON (TRC20)</option>
                <option value="erc20">Ethereum (ERC20)</option>
                <option value="bitcoin">Bitcoin</option>
              </select>
            </div>
          </div>
          {watchChain !== "" && (
            <div className="flex flex-col gap-2">
              <div className="flex flex-col px-5 gap-2 text-[14px]">
                <div className="flex flex-row justify-between">
                  <p>Transfer fee</p>
                  {watchChain === "bep20" ? (
                    <p>$1.00</p>
                  ) : watchChain === "erc20" ? (
                    <p>$10.00</p>
                  ) : watchChain === "trc20" ? (
                    <p>$2.00</p>
                  ) : (
                    <p>$10.00</p>
                  )}
                </div>
                <div className="flex flex-row justify-between">
                  <p>You will receive</p>
                  {watchToken === "usdt" && watchChain === "bep20" ? (
                    <p>{(watchAmount / 1.06 - 1).toFixed(2)} USDT</p>
                  ) : watchToken === "usdt" && watchChain === "erc20" ? (
                    <p>{(watchAmount / 1.06 - 10).toFixed(2)} USDT</p>
                  ) : watchToken === "usdt" && watchChain === "trc20" ? (
                    <p>{(watchAmount / 1.06 - 2).toFixed(2)} USDT</p>
                  ) : watchToken === "usdt" && watchChain === "bitcoin" ? (
                    <p>{(watchAmount / 1.06 - 10).toFixed(2)} USDT</p>
                  ) : (
                    <p>~</p>
                  )}
                </div>
              </div>
              <div className="rounded-md border-solid border-[#E8EAED] border-[1px]">
                <input
                  type="text"
                  id="wallet"
                  placeholder="Paste receiving wallet address"
                  className="bg-transparent px-2 py-1 w-full focus:outline-2 focus:outline-primary"
                  {...register("wallet", {
                    required: "Wallet is required",
                  })}
                />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <label
            htmlFor="amount"
            className="font-semibold after:content-['*'] after:ml-0.5 after:text-red-500"
          >
            Amount of crypto
          </label>
          <div className="rounded-md border-solid border-[#E8EAED] border-[1px]">
            <input
              type="number"
              id="amount"
              placeholder="10"
              className="bg-transparent px-2 py-1 w-full focus:outline-2 focus:outline-primary"
              {...register("amount", {
                required: "Amount is required",
              })}
            />
          </div>
        </div>
      )}

      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="font-semibold after:content-['*'] after:ml-0.5 after:text-red-500"
        >
          Your Name
        </label>
        <div className="rounded-md border-solid border-[#E8EAED] border-[1px]">
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            className="bg-transparent px-2 py-1 w-full focus:outline-2 focus:outline-primary"
            {...register("name", { required: "Name is required" })}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="phone"
          className="font-semibold after:content-['*'] after:ml-0.5 after:text-red-500"
        >
          Your Phone
        </label>
        <Controller
          control={control}
          name="phone"
          rules={{ required: "Phone number is required" }}
          render={({ field }) => (
            <div className="rounded-md border-solid border-[#E8EAED] border-[1px]">
              <ReactPhoneInput
                {...field}
                country={"us"}
                placeholder="+1 (999)-999-9999"
                inputProps={{
                  required: true,
                  autoFocus: true,
                }}
                inputClass="focus:outline-2 focus:outline-primary"
                inputStyle={{
                  fontSize: "18px",
                  background: "transparent",
                  border: "none",
                  outline: "none",
                }}
                dropdownClass="text-black"
                buttonStyle={{
                  background: "transparent",
                }}
              />
            </div>
          )}
        />
      </div>

      <fieldset>
        <legend className="font-semibold after:content-['*'] after:ml-0.5 after:text-red-500">
          Payment Method
        </legend>
        <div className="mt-4">
          {paymentMethods.map((c) => (
            <div
              key={c.name}
              className="flex items-center hover:cursor-pointer mb-1"
            >
              <input
                type="radio"
                id={c.name}
                className="bg-transparent px-2 py-1 w-5 h-5 focus:outline-2 focus:outline-primary hover:cursor-pointer"
                value={c.value}
                {...register("payment", {
                  required: "Payment Method is required",
                })}
              />
              <label
                htmlFor={c.name}
                className="ml-2 hover:cursor-pointer hover:opacity-80"
              >
                {c.name}
              </label>
            </div>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="font-semibold after:content-['*'] after:ml-0.5 after:text-red-500">
          Contact Method:
        </legend>
        <div className="mt-4">
          {contact.map((c) => (
            <div
              key={c}
              className="flex items-center hover:cursor-pointer mb-1"
            >
              <input
                type="radio"
                id={c}
                className="bg-transparent px-2 py-1 w-5 h-5 focus:outline-2 focus:outline-primary hover:cursor-pointer"
                value={c}
                {...register("contact", {
                  required: "Contact Method is required",
                })}
              />
              <label
                htmlFor={c}
                className="ml-2 hover:cursor-pointer hover:opacity-80"
              >
                {c}
              </label>
            </div>
          ))}
        </div>
      </fieldset>

      {watchContact === "Telegram" && (
        <div className="flex flex-col gap-2">
          <label
            htmlFor="telegram"
            className="font-semibold after:content-['*'] after:ml-0.5 after:text-red-500"
          >
            Telegram
          </label>
          <div className="rounded-md border-solid border-[#E8EAED] border-[1px]">
            <input
              type="text"
              id="telegram"
              placeholder="@abuglobal"
              className="bg-transparent px-2 py-1 w-full focus:outline-2 focus:outline-primary"
              {...register("telegram", {
                required: "Telegram username is required",
              })}
            />
          </div>
        </div>
      )}

      <div className="flex flex-col gap-2">
        <label htmlFor="referral" className="font-semibold">
          Referral code
        </label>
        <div className="rounded-md border-solid border-[#E8EAED] border-[1px]">
          <input
            type="text"
            id="referral"
            placeholder=""
            className="bg-transparent px-2 py-1 w-full focus:outline-2 focus:outline-primary"
            {...register("referral")}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-primary w-full py-3 px-5 rounded-md font-bold text-white mt-3"
      >
        {isSubmitting ? <Loading text="Making Order" /> : "Make Order"}
      </button>
      <ToastContainer position="bottom-center" />
    </form>
  );
}
