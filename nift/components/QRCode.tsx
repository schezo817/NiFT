import { useQRCode } from "next-qrcode";

interface QRCodeProps {
    text: string;
}

export const QRCode = (props: QRCodeProps) => {
    const { Canvas } = useQRCode();

    return <Canvas text={props.text} />;
};
