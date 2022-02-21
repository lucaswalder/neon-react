import { SecondaryButton, PrimaryButton } from "./style";



export function ButtonPrimary({text, modal}) {
    return <PrimaryButton onClick={modal}>
        {text}
    </PrimaryButton>
};

export function ButtonSecondary({text}) {
    return <SecondaryButton>
        {text}
    </SecondaryButton>
};