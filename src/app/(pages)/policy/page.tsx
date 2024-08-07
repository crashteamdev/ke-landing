import { Metadata } from "next";

export const metadata: Metadata = {
    title: "MarketDB | Политика возврата"
}

const Policy = () => {
    return (
        <>
            <div className="write-page-content">
                <h4>Политика возврата</h4>
                <p>В случае, если пользователь считает качество работы Сервиса неудовлетворительным, он может аннулировать свой аккаунт. Если аннулирование произошло в течение двух суток с момента оплаты подписки и при условии получения не более чем 5 отчетов в системе - мы гарантируем полный возврат денежных средств. Для аннулирования аккаунта необходимо отправить письмо на адрес <a href="mailto:support@marketdb.ru">support@marketdb.ru</a> с указанием своей почты, токена и описанием ситуации.</p>
                <p>Возврат средств возможен только на те же реквизиты, с которых средства были перечислены в качестве оплаты.</p>
                {/* <p>Удостоверьтесь, что вы ознакомились с Пользовательским соглашением.</p> */}
            </div>
        </>
    );
};

export default Policy;