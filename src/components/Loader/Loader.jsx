import { RotateLoader } from "react-spinners";
import "./loader.css";

const Loader = ({ loaderType = 'rotate', size = 20, color = '#0f3460' }) => {
    return (
        <div className="loader" role="status" aria-live="polite">
            {loaderType === 'rotate' && (
                <RotateLoader
                    color={color}
                    size={size}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            )}
            {/* You can add other loader types here as needed */}
        </div>
    );
};

export default Loader;
