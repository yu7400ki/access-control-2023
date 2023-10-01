import { useZxing } from 'react-zxing';

type Props = {
  setResult: React.Dispatch<React.SetStateAction<string>>;
  onRequestClose: () => void;
};

const QrReader: React.FC<Props> = ({ setResult, onRequestClose }: Props) => {
  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
      onRequestClose();
    },
    // onDecodeError(error) {
    //   // eslint-disable-next-line no-console
    //   console.log(error);
    // },
    onError(error) {
      // eslint-disable-next-line no-console
      console.error(error);
    },
  });

  return (
    <>
      <video ref={ref} className="videoFrame" style={{ maxWidth: '100%;', maxHeight: '60%' }} />
    </>
  );
};

export default QrReader;
