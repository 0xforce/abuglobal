"use server";

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

export async function makeTelegramAPICall(data: Inputs) {
  const telegramChatId = "4072569305";
  const botToken = "6968993305:AAH9pIZVZ6QM1PHMtkCnl8Io_WAiFIY3rCU";

  const marketUpEmoji = "📈";
  const marketDownEmoji = "📉";

  const telegramMessage = `${
    data.orderType === "buy" ? marketUpEmoji : marketDownEmoji
  } ${data.orderType.toUpperCase()}
  
  I want to ${data.orderType} ${
    data.orderType === "buy" ? "$" + data.amount : data.amount
  } ${data.token === "other" ? data.otherToken : data.token.toUpperCase()}.
  
  Name: ${data.name}
  Phone number: +${data.phone}
  Payment method: ${data.payment}
  ${
    data.orderType === "buy"
      ? `Receiving address: ${data.wallet}\nChain: ${data.blockchain}\n`
      : ""
  }
  Referral: ${data.referral}
  Telegram: ${"https://" + data.telegram + ".t.me"}
  
  
  👆 Send this message, we will respond ASAP.`;

  const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=-${telegramChatId}&text=${encodeURIComponent(
    telegramMessage
  )}`;

  try {
    const response = await fetch(telegramUrl, { method: "POST" });

    if (response.status === 200) {
      console.log("Telegram message sent successfully");
      return true;
    } else {
      console.error("Error sending Telegram message");
      return false;
    }
  } catch (error) {
    console.error("An error occurred:", error);
    return false;
  }
}
