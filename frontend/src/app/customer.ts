export class Customer {
   
    invoiceNo?: number;
    amount?: number;
    customerName?: string;
    customerAddress?: string;
    customerContact?: number;
    date?: Date | null;
  
    constructor(data?: any) {
      if (data) {
      
        this.invoiceNo = data.invoiceNo;
        this.amount = data.amount;
        this.customerName = data.customerName;
        this.customerAddress = data.customerAddress;
        this.customerContact = data.customerContact;
        this.date = data.date ? new Date(data.date) : null;
      }
    }
  }
  