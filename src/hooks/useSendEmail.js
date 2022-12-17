import { sendEmailApi } from "../api/sendEmail"


export const useSendEmail = () => {

    const sendEmail = async ({ name , email }) => {

        try {

            const { data } = await sendEmailApi.post('sendEmail', { name, email })

            console.log(data)


        } catch (error) {
            console.log(error)
        }
    }

    return {
        sendEmail
    }


}