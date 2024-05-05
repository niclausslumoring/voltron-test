// api/chargeStations.js

import { GraphQLClient } from "graphql-request";

export async function getAllChargeStations() {
  const endpoint = "https://staging.voltron.id/v1/graphql";
  const graphQLClient = new GraphQLClient(endpoint);

  const query = `
    query GetChargeStation($limit: Int, $offset: Int) {
      publicChargeStation(limit: $limit, offset: $offset, orderBy: {createdAt: ASC}) {
        id
        name
        coordinates
        address
        city
        state
        postalCode
        operatingHours
        chargePoints {
          id
          chargePointConnectors {
            id
            chargePointId
            position
            connector
            maxPower
            available
            enumConnector {
              type
            }
            tariff {
              id
              priceKwh
              adminFee
              connectionFee
              currencyId
              pjnFee
              priceKwhOriginal
              connectionFeeOriginal
              discountPercentageKwh
              discountPercentageSurcharge
              discountPercentageAdminFee
              tax {
                id
                amount
              }
            }
          }
        }
        total: chargePointsAggregate(where: {isAvailable: {_eq: "Available"}}) {
          aggregate {
            count
          }
        }
      }
    }
  `;

  const variables = { limit: 10, offset: 0 }; // You can adjust these variables as per your requirements

  try {
    const data = await graphQLClient.request(query, variables);
    return data.publicChargeStation;
  } catch (error) {
    console.error("Error fetching charge stations:", error);
    return null;
  }
}
