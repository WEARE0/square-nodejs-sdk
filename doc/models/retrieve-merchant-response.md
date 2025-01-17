
# Retrieve Merchant Response

The response object returned by the [RetrieveMerchant](/doc/api/merchants.md#retrieve-merchant) endpoint.

## Structure

`RetrieveMerchantResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](/doc/models/error.md) | Optional | Information on errors encountered during the request. |
| `merchant` | [`Merchant \| undefined`](/doc/models/merchant.md) | Optional | Represents a Square seller. |

## Example (as JSON)

```json
{
  "merchant": {
    "business_name": "Apple A Day",
    "country": "US",
    "currency": "USD",
    "id": "DM7VKY8Q63GNP",
    "language_code": "en-US",
    "main_location_id": "9A65CGC72ZQG1",
    "status": "ACTIVE"
  }
}
```

