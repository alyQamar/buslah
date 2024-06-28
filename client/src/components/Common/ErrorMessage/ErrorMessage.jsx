const ErrorMessage = ({ message, onClose }) => (
  <div className="fixed bottom-0 right-0 m-4 p-4 bg-red-600 text-white rounded-lg shadow-lg flex items-center">
    <span>{message}</span>
    <button onClick={onClose} className="ml-4 text-white hover:text-red-200">&times;</button>
  </div>
);
export default ErrorMessage;
