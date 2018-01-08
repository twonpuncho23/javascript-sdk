"use strict";

import { Configuration } from "./Configuration";
import { RecipientGateway } from "./RecipientGateway";
import { RecipientAccountGateway } from "./RecipientAccountGateway";
import { BatchGateway } from "./BatchGateway";
import { PaymentGateway } from "./PaymentGateway";
import { BalancesGateway } from "./BalancesGateway";
import { Client } from "./Client";

export class Gateway {
    config: Configuration;
    client: Client;
    recipient: RecipientGateway;
    batch: BatchGateway;
    recipientAccount: RecipientAccountGateway;
    balances: BalancesGateway;
    payment: PaymentGateway;

    constructor(config: Configuration) {
        this.config = config;
        this.client = new Client(config);
        this.recipient = new RecipientGateway(this);
        this.batch = new BatchGateway(this);
        this.recipientAccount = new RecipientAccountGateway(this);
        this.balances = new BalancesGateway(this);
        this.payment = new PaymentGateway(this);

    }
}