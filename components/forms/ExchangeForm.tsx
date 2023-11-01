import {FieldValues, useForm, Controller, UseFormRegister} from "react-hook-form";

import { useState } from 'react'

import Form from '@/components/forms/Form'
import Loading from '@/components/ui/Loading'

import ReactPhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'

type FormProps = {
  register: UseFormRegister<FieldValues>
  isSubmitting: boolean
  errors: { [error: string]: any }
}

type FormInputs = {
  orderType: string
  token: string
  otherToken: string
  amount: string
  name: string
  phone: string,
  paymentMethod: string,
}

function ExchangeForm() {
  const { control } = useForm();

  const paymentMethods = ['Zelle', 'Bancolombia', 'Nequi', 'ACH Transfer', 'Bank of America', 'Wells Fargo']

  const [formData, setFormData] = useState<FormInputs>({
    orderType: '',
    token: '',
    otherToken: '',
    amount: '',
    name: '',
    phone: '',
    paymentMethod: '',
  });

  const handlePaymentChange = (value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      paymentMethod: value === prevFormData.paymentMethod ? '' : value,
    }));
  };

  const handleOther = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      otherToken: e.target.value,
    }));
  };

  const renderForm = ({register, errors, isSubmitting}: FormProps) => {
    return (
      <div className="flex flex-col gap-6 text-gray-700">
        <div className="flex flex-col gap-2">
          <div className="border-0">
            <input 
              type="text" 
              value="Buy"
              className="bg-transparent border-0 focus:outline-none cursor-default"
              readOnly
              {...register("orderType")} 
            />
          </div>
          <label htmlFor="token" className="font-semibold">Cryptocurrency</label>
          <div className="rounded-md border-solid border-[#E8EAED] border-[1px]">
            <select
              id="token"
              className="bg-transparent px-2 py-1 w-full focus:outline-2 focus:outline-primary"
              {...register("token", { required: true })}
              onChange={(e: any) => handleOther(e)}
            >
              <option value="">Select a Cryptocurrency</option>
              <option value="usdt">Tether USDT</option>
              <option value="usdc">Circle USDC</option>
              <option value="btc">Bitcoin BTC</option>
              <option value="eth">Ethereum ETH</option>
              <option value="ltc">Litecoin LTC</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="text-red">{errors.token?.message}</div>
        </div>
        {formData.otherToken === "other" && (
          <div className="flex flex-col gap-2">
            <label htmlFor="otherToken" className="font-semibold">Name other crypto</label>
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
        
        <div className="flex flex-col gap-2">
          <label htmlFor="amount" className="font-semibold">Amount in USD (min. $250)</label>
          <div className="rounded-md border-solid border-[#E8EAED] border-[1px]">
            <input 
              type="text"
              id="amount"
              className="bg-transparent px-2 py-1 w-full focus:outline-2 focus:outline-primary"
              {...register("amount", {required: true})} 
            />
          </div>
          <div className="text-red">{errors.amount?.message}</div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-semibold">Your Name</label>
          <div className="rounded-md border-solid border-[#E8EAED] border-[1px]">
            <input 
              type="text"
              id="name"
              className="bg-transparent px-2 py-1 w-full focus:outline-2 focus:outline-primary"
              {...register("name", {required: true})} 
            />
          </div>
          <div className="text-red">{errors.name?.message}</div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="font-semibold">Your Phone</label>
          <Controller
            control={control}
            {...register("phone", {required: true})}
            render={({ field }) => (
              <div className="rounded-md border-solid border-[#E8EAED] border-[1px]">
                <ReactPhoneInput
                  {...field}
                  country={'us'}
                  inputProps={{
                    required: true,
                    autoFocus: true,
                    showDropdown: true
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
          <label htmlFor="payment" className="font-semibold">Payment Method</label>
          <div className="mt-4">
            {paymentMethods.map((c,i) =>
                <div key={c} className="flex items-center hover:cursor-pointer mb-1">
                    <input 
                      type="checkbox" 
                      id={c}
                      className="bg-transparent px-2 py-1 w-5 h-5 focus:outline-2 focus:outline-primary hover:cursor-pointer"
                      checked={c === formData.paymentMethod}
                      {...register("payment", {required: true})}
                      onChange={() => handlePaymentChange(c)}
                    />
                    <label htmlFor={c} className="ml-2 hover:cursor-pointer hover:opacity-80">{c}</label>
                </div>
              )
            }
          </div>
        </fieldset>
          
        <button disabled={isSubmitting} className="bg-primary w-full py-3 px-5 rounded-md font-bold text-white">
            {isSubmitting ? <Loading/> : "Make Order"}
        </button>
        <p className="text-center font-semibold text-black text-[12px] mt-[-10px] mb-[5px]">We are going to reply to you within 30 minutes</p>
      </div>
    );       
  }
  return <Form renderForm={renderForm} setFormData={setFormData} />
}

export default ExchangeForm