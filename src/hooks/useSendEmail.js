import Swal from "sweetalert2"
import { sendEmailApi } from "../api/sendEmail"


export const useSendEmail = () => {

    const sendEmail = async ({ name , email }) => {

        try {

            const { data, status } = await sendEmailApi.post('sendEmail', { name, email })

            if(status === 200) {
                Swal.fire("¡Enviado!", data.msg, "success");
            }


        } catch (error) {
            console.log(error)
        }
    }

    return {
        sendEmail
    }


}