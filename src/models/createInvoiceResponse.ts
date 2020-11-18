import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { Invoice, invoiceSchema } from './invoice';

/** The response returned by the `CreateInvoice` request. */
export interface CreateInvoiceResponse {
  /**
   * Stores information about an invoice. You use the Invoices API to create and process
   * invoices. For more information, see [Manage Invoices Using the Invoices API](https://developer.squareup.com/docs/invoices-api/overview).
   */
  invoice?: Invoice;
  /** Information about errors encountered during the request. */
  errors?: Error[];
}

export const createInvoiceResponseSchema: Schema<CreateInvoiceResponse> = object(
  {
    invoice: ['invoice', optional(lazy(() => invoiceSchema))],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);