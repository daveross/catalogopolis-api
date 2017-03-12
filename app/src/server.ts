/**
 * @file Catalogopolis API Bootstrap/Initialization
 * @author Dave Ross <dave@davidmichaelross.com>
 */

import {express, Application} from "express"
import restv1 from "./restv1"
import { Database } from "sqlite3"
import graphql from "graphql"
import * as path from "path"

var connection: Database = new Database(path.join(__dirname, '..', 'catalogopolis-api.sqlite'));

var server: Application = express();

restv1(server, connection);
graphql(server, connection);

server.listen(5000);