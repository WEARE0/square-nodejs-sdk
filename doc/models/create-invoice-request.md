
# Create Invoice Request

Describes a `CreateInvoice` request.

## Structure

`CreateInvoiceRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `invoice` | [`Invoice`](/doc/models/invoice.md) |  | Stores information about an invoice. You use the Invoices API to create and process<br>invoices. For more information, see [Manage Invoices Using the Invoices API](https://developer.squareup.com/docs/invoices-api/overview). |
| `idempotencyKey` | `string` | Optional | A unique string that identifies the `CreateInvoice` request. If you do not<br>provide `idempotency_key` (or provide an empty string as the value), the endpoint<br>treats each request as independent.<br><br>For more information, see [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency). |

## Example (as JSON)

```json
{
  "idempotency_key": "ce3748f9-5fc1-4762-aa12-aae5e843f1f4",
  "invoice": {
    "description": "We appreciate your business!",
    "invoice_number": "inv-100",
    "location_id": "ES0RJRZYEC39A",
    "order_id": "CAISENgvlJ6jLWAzERDzjyHVybY",
    "payment_requests": [
      {
        "due_date": "2030-01-24",
        "reminders": [
          {
            "message": "Your invoice is due tomorrow",
            "relative_scheduled_days": -1
          }
        ],
        "request_method": "EMAIL",
        "request_type": "BALANCE",
        "tipping_enabled": true
      }
    ],
    "primary_recipient": {
      "customer_id": "JDKYHBWT1D4F8MFH63DBMEN8Y4"
    },
    "scheduled_at": "2030-01-13T10:00:00Z",
    "title": "Event Planning Services"
  }
}
```
