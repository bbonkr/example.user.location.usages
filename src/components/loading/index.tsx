type LoadingProps = {
  message?: string;
};

const Loading = ({ message }: LoadingProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
      {message && (
        <div>
          <p className="px-6 py-3 bg-slate-300">{message}</p>
        </div>
      )}
    </div>
  );
};

export default Loading;
