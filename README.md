### bitcoin-prices

This is a very simple we application for checking `bitcoin` prices from an api.

### API url

The url to get the `bitcoin` prices is:

```shell
https://api.coindesk.com/v1/bpi/currentprice.json
```

### API data

The data from an `api` looks as follows:

```json
{
  "time": {
    "updated": "Dec 5, 2022 08:58:00 UTC",
    "updatedISO": "2022-12-05T08:58:00+00:00",
    "updateduk": "Dec 5, 2022 at 08:58 GMT"
  },
  "disclaimer": "This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org",
  "chartName": "Bitcoin",
  "bpi": {
    "USD": {
      "code": "USD",
      "symbol": "&#36;",
      "rate": "17,366.9829",
      "description": "United States Dollar",
      "rate_float": 17366.9829
    },
    "GBP": {
      "code": "GBP",
      "symbol": "&pound;",
      "rate": "14,511.7120",
      "description": "British Pound Sterling",
      "rate_float": 14511.712
    },
    "EUR": {
      "code": "EUR",
      "symbol": "&euro;",
      "rate": "16,917.9769",
      "description": "Euro",
      "rate_float": 16917.9769
    }
  }
}
```
