"use strict";

import moment from "moment";
import request from "supertest";
import { assert } from "chai";

const urlAvailabilitySchedule = process.env.URL_CALENDAR;

export async function dateGenerator(token) {
  let foundAvailableDate = false;
  let maxTries = 10;
  let date = moment().add(1, "days");

  while (!foundAvailableDate && maxTries > 0) {
    maxTries--;

    let queryStringDate = `/availabilityschedule?date=${date.format(
      "YYYY-MM-DD"
    )}&service=wireTransfer`;

    const response = await request(urlAvailabilitySchedule)
      .get(queryStringDate)
      .set("Content-type", "application/json")
      .set("Authorization", "Bearer " + token)
      .expect(200);

    assert.isTrue(response.body != null);
    let availabilitySchedule = response.body;

    if (
      availabilitySchedule[0].periods &&
      availabilitySchedule[0].periods.length > 0
    ) {
      foundAvailableDate = true;
    } else {
      date = moment(date).add(1, "days");
    }
  }

  assert.equal(foundAvailableDate, true);
  return date;
}
