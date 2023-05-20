
import { Circles } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div className="flex justify-center">
        <Circles
          height="50"
          width="50"
          color="#e11d48"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
};

export default Loading;