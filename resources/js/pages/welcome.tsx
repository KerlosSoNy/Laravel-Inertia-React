import HomeLayout from "@/layouts/HomeLayout";
import { useTranslation } from "react-i18next";

export default function Welcome() {
    const { t } = useTranslation();
    return (
        <HomeLayout>
            <span>
                {t('hello')}
            </span>
        </HomeLayout>
    );
}
