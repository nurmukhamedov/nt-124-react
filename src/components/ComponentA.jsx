import { useTranslation } from "react-i18next"

const ComponentA = () => {
    const { t } = useTranslation();
    return (
        <div>
            {t("homePage")}
        </div>
    )
}

export default ComponentA