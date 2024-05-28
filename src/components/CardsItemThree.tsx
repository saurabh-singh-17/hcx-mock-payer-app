import React from 'react';
import { Link } from 'react-router-dom';
import { CardItemProps } from '../types/cards';
import _ from 'lodash';

const CardsItemThree: React.FC<CardItemProps> = ({
  cardTitle,
  cardRedirectURL,
  cardData,
  cardContent
}) => {

  if(cardData){
    console.log("cardData", cardData);
  }

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke p-5 px-7.5 dark:border-strokedark">
        <h4 className="text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
          <Link to={cardRedirectURL? cardRedirectURL : "#"}>{cardTitle}</Link>
        </h4>
      </div>
      {cardData ? 
      <div className="px-7.5 pt-6 pb-9">
        <span className="mt-2 block flex justify-between">
          <span className="font-medium w-1/2">Total Request :</span><span className="font-medium w-1/2"> {_.get(cardData, "TotalValue") ? _.get(cardData, "TotalValue") : 0} </span> 
        </span>
        <span className="mt-2 block flex justify-between">
          <span className="font-medium w-1/2">Pending Request :</span><span className="font-medium w-1/2">{_.get(cardData, "TotalPending") ? _.get(cardData, "TotalPending") : 0}</span> 
        </span>
        <span className="mt-2 block flex justify-between">
          <span className="font-medium w-1/2">Last 3 days :</span><span className="font-medium w-1/2">{_.get(cardData, "last3") ? _.get(cardData, "last3") : 0}</span> 
        </span>
      </div> : <div className="px-7.5 pt-6 pb-9"><p>{cardContent}</p></div> } 
    </div>
  );
};

export default CardsItemThree;
