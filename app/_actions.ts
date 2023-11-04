'use server'

type Inputs = {
    orderType: string
    token: string
    otherToken: string
    amount: number
    name: string
    payment: string
    phone: string
    contact: string
    telegram: string
}

export async function makeTelegramAPICall(data: Inputs) {

    const telegramChatId = '4072569305'
    const botToken = '6968993305:AAH9pIZVZ6QM1PHMtkCnl8Io_WAiFIY3rCU'

    const marketUpEmoji = '📈';
    const marketDownEmoji = '📉';

    const telegramMessage = `${data.orderType === 'buy' ? marketUpEmoji : marketDownEmoji} ${data.orderType.toUpperCase()}\n\nI want to ${data.orderType} ${data.orderType === 'buy' ? ('$' + data.amount) : data.amount} worth of ${data.token === 'other' ? data.otherToken : data.token}.\n\nName: ${data.name}\nPhone number: +${data.phone}\nPayment method: ${data.payment}\nTelegram: ${'https://'+data.telegram+'.t.me'}\n\n👆 Send this message, we will respond ASAP.`;


    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=-${telegramChatId}&text=${encodeURIComponent(telegramMessage)}`

    try {
        const response = await fetch(telegramUrl, { method: 'POST' });

        if (response.status === 200) {
            console.log('Telegram message sent successfully');
            return true;
        } else {
            console.error('Error sending Telegram message');
            return false;
        }
    } catch (error) {
        console.error('An error occurred:', error);
        return false;
    }

}