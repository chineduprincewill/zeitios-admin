import { useContext } from "react"

export const checkRole = (userRole, adminlinks, clientlinks, freelancerlinks, setNavlinks) => {

    if(userRole === 'Client'){
        setNavlinks(clientlinks);
    }
    else if(userRole === 'Freelancer'){
        setNavlinks(freelancerlinks);
    }
    else if(userRole === 'Admin'){
        setNavlinks(adminlinks);
    }
}


export const statusColor = (status) => {
    let color;

    if(status === 'In Progress' || status === "Pending"){
        color = 'border border-orange-200 bg-transparent hover:bg-orange-300 text-orange-500 hover:text-white';
    }
    else if(status === 'Completed'){
        color = 'border border-green-500 bg-transparent hover:bg-green-500 text-green-500 hover:text-white'
    }
    else if(status === 'Cancel'){
        color = 'border border-red-500 bg-transparent hover:bg-red-500 text-red-500 hover:text-white'
    }

    return color;
}


export const formatDateWithFullMonthName = (dt) => {
    const date = new Date(dt);
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
  
    return `${monthNames[month]} ${day}, ${year}`;
}


export const formatCurrency = (amount) => {
    const currencyCode="USD";
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currencyCode
    });
  
    return formatter.format(amount);
}
  
  