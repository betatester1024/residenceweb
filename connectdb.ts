"use server";
import fs, { readFileSync } from 'fs';
import pg from 'pg';
import url from 'url';
import { configDotenv } from 'dotenv';

configDotenv();

const config = {
  user: "avnadmin",
  password: process.env.DBPWD,
  host: "residenceweb-greendustriesinc-e900.e.aivencloud.com",
  port: 14818,
  database: "defaultdb",
  ssl: {
    rejectUnauthorized: true,
    ca: readFileSync("ca.pem").toString(),
  },
};

function prepClient() {
  const client = new pg.Client(config);
  client.connect(function (err:Error) {
    if (err)
      throw err;
    client.query("SELECT VERSION()", [], function (err:Error, result) {
      if (err)
        throw err;
      console.log(result.rows[0].version);
      client.end(function (err:Error) {
        if (err)
          throw err;
      });
    });
  });

}
