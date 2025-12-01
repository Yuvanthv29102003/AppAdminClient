import type { FC } from 'react';
import { Modal } from './Modal';
import type { BoostedPostData } from '../constants/mockData';
import logo from '../assets/Logo.svg';

interface BoostPostInvoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  postData: BoostedPostData;
}

export const BoostPostInvoiceModal: FC<BoostPostInvoiceModalProps> = ({ 
  isOpen, 
  onClose, 
  postData 
}) => {
  const calculateTotal = () => {
    const price = parseInt(postData.boostPrice.replace('$', ''));
    const hours = parseInt(postData.boostTime.split(' ')[0]);
    return price * hours;
  };

  const total = calculateTotal();
  const tax = Math.round(total * 0.1); // 10% tax
  const grandTotal = total + tax;

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="p-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-[286px] h-[100px] flex items-center justify-center">
          <img src={logo} alt="Logo" className="w-[286px] h-[120px]" />
        </div>
        <div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-2 border border-[#2B2B2B] rounded-[8px] p-[16px]">
            <div>
              <p className="text-[8px] text-[#FFFFFF]">Issued:</p>
              <p className="font-semibold text-[12px] text-[#FFFFFF]">{postData.uploadTime}</p>
            </div>
            <div>
              <p className="text-[8px] text-[#FFFFFF]">Invoice Number:</p>
              <p className="font-semibold text-[12px] text-[#FFFFFF]">N°: 000027</p>
            </div>
            <div>
              <p className="text-[8px] text-[#FFFFFF]">Due date:</p>
              <p className="font-semibold text-[12px] text-[#FFFFFF]">{postData.uploadTime}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Invoice Table */}
      <div className="border border-[#2B2B2B] rounded-[8px] overflow-hidden mb-8 p-4">
        <table className="w-[495px] h-[270px]">
          <thead>
            <tr>
              <th className="text-left p-4 font-semibold text-[#FFFFFF]">Post ID</th>
              <th className="text-left p-4 font-semibold text-[#FFFFFF]">Upload ID</th>
              <th className="text-left p-4 font-semibold text-[#FFFFFF]">Days</th>
              <th className="text-right p-4 font-semibold text-[#FFFFFF]">Price</th>
              <th className="text-right p-4 font-semibold text-[#FFFFFF]">Total</th>
            </tr>
          </thead>
          <tbody className="border border-[#2B2B2B] rounded-[8px]">
            <tr className="border-b border-gray-200">
              <td className="p-4 text-[12px] text-[#FFFFFF]">{postData.postId}</td>
              <td className="p-4 text-[12px] text-[#FFFFFF]">{postData.postId}</td>
              <td className="p-4 text-[12px] text-[#FFFFFF]">1</td>
              <td className="p-4 text-right text-[12px] text-[#FFFFFF]">{postData.boostPrice}</td>
              <td className="p-4 text-right text-[12px] text-[#FFFFFF]">${total}</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="p-4 text-[12px] text-[#FFFFFF]">{postData.postId}</td>
              <td className="p-4 text-[12px] text-[#FFFFFF]">{postData.postId}</td>
              <td className="p-4 text-[12px] text-[#FFFFFF]">1</td>
              <td className="p-4 text-right text-[12px] text-[#FFFFFF]">{postData.boostPrice}</td>
              <td className="p-4 text-right text-[12px] text-[#FFFFFF]">${total}</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="p-4 text-[12px] text-[#FFFFFF]">{postData.postId}</td>
              <td className="p-4 text-[12px] text-[#FFFFFF]">{postData.postId}</td>
              <td className="p-4 text-[12px] text-[#FFFFFF]">1</td>
              <td className="p-4 text-right text-[12px] text-[#FFFFFF]">{postData.boostPrice}</td>
              <td className="p-4 text-right text-[12px] text-[#FFFFFF]">${total}</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="p-4 text-[12px] text-[#FFFFFF]">{postData.postId}</td>
              <td className="p-4 text-[12px] text-[#FFFFFF]">{postData.postId}</td>
              <td className="p-4 text-[12px] text-[#FFFFFF]">1</td>
              <td className="p-4 text-right text-[12px] text-[#FFFFFF]">{postData.boostPrice}</td>
              <td className="p-4 text-right text-[12px] text-[#FFFFFF]">${total}</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="p-4 text-[12px] text-[#FFFFFF]">{postData.postId}</td>
              <td className="p-4 text-[12px] text-[#FFFFFF]">{postData.postId}</td>
              <td className="p-4 text-[12px] text-[#FFFFFF]">1</td>
              <td className="p-4 text-right text-[12px] text-[#FFFFFF]">{postData.boostPrice}</td>
              <td className="p-4 text-right text-[12px] text-[#FFFFFF]">${total}</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="p-4 text-[12px] text-[#FFFFFF]">{postData.postId}</td>
              <td className="p-4 text-[12px] text-[#FFFFFF]">{postData.postId}</td>
              <td className="p-4 text-[12px] text-[#FFFFFF]">1</td>
              <td className="p-4 text-right text-[12px] text-[#FFFFFF]">{postData.boostPrice}</td>
              <td className="p-4 text-right text-[12px] text-[#FFFFFF]">${total}</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="p-4 text-[12px] text-[#FFFFFF]">{postData.postId}</td>
              <td className="p-4 text-[12px] text-[#FFFFFF]">{postData.postId}</td>
              <td className="p-4 text-[12px] text-[#FFFFFF]">1</td>
              <td className="p-4 text-right text-[12px] text-[#FFFFFF]">{postData.boostPrice}</td>
              <td className="p-4 text-right text-[12px] text-[#FFFFFF]">${total}</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="p-4 text-[12px] text-[#FFFFFF]">{postData.postId}</td>
              <td className="p-4 text-[12px] text-[#FFFFFF]">{postData.postId}</td>
              <td className="p-4 text-[12px] text-[#FFFFFF]">1</td>
              <td className="p-4 text-right text-[12px] text-[#FFFFFF]">{postData.boostPrice}</td>
              <td className="p-4 text-right text-[12px] text-[#FFFFFF]">${total}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-[12px] text-[#FFFFFF]">Total due</span>
          <span className="text-[12px] font-bold text-[#FFFFFF]">${grandTotal}</span>
        </div>
        
        <div className="border-t pt-4 space-y-2">
          <div className="flex justify-between">
            <span className="text-[12px] text-[#FFFFFF]">Subtotal</span>
            <span>${total}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[12px] text-[#FFFFFF]">TAX</span>
            <span>${tax}</span>
          </div>
          <div className="flex justify-between font-bold text-[12px] text-[#FFFFFF]">
            <span>Grand Total</span>
            <span>${grandTotal}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-8">
        <button
          onClick={onClose}
          className="flex-1 px-6 py-3 border border-gray-300 rounded-lg font-medium text-[#FFFFFF] hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          className="flex-1 px-6 py-3 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-colors"
        >
          Pay Now
        </button>
      </div>
    </Modal>
  );
};
