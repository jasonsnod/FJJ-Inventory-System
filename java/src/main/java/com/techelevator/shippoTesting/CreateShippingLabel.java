package com.techelevator.shippoTesting;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.shippo.Shippo;
import com.shippo.exception.ShippoException;
import com.shippo.model.Rate;
import com.shippo.model.Shipment;
import com.shippo.model.Transaction;
public class CreateShippingLabel {

    public static void main(String[] args) throws ShippoException {

        Shippo.setApiKey("shippo_test_95ea76a58e0a641bbefee1f1c2f34cb1f2d3b847");
        Shippo.setApiVersion("2018-02-08");

        Map<String, Object> toAddressMap = new HashMap<String, Object>();
        toAddressMap.put("name", "Jason Snoddy");
        toAddressMap.put("company", "Package Du Fromage");
        toAddressMap.put("street1", "6245 Avanelle Dr.");
        toAddressMap.put("city", "Athens");
        toAddressMap.put("state", "Ohio");
        toAddressMap.put("zip", "45701");
        toAddressMap.put("country", "United States");
        toAddressMap.put("phone", "+1 740 825 2802");
        toAddressMap.put("email", "jasonsnod@gmail.com");

        Map<String, Object> fromAddressMap = new HashMap<String, Object>();
        fromAddressMap.put("name", "Jennifer Curtis");
        fromAddressMap.put("company", "FJJ Inventory Systems");
        fromAddressMap.put("street1", "186 East Hudson Street");
        fromAddressMap.put("city", "Columbus");
        fromAddressMap.put("state", "Ohio");
        fromAddressMap.put("zip", "43202");
        fromAddressMap.put("country", "United States");
        fromAddressMap.put("phone", "+1 555 341 9393");
        fromAddressMap.put("email", "craftycurtis05@gmail.com");

        Map<String, Object> parcelMap = new HashMap<String, Object>();
        parcelMap.put("length", "5");
        parcelMap.put("width", "5");
        parcelMap.put("height", "5");
        parcelMap.put("distance_unit", "in");
        parcelMap.put("weight", "2");
        parcelMap.put("mass_unit", "lb");
        List<Map<String, Object>> parcels = new ArrayList<Map<String, Object>>();
        parcels.add(parcelMap);

        Map<String, Object> shipmentMap = new HashMap<String, Object>();
        shipmentMap.put("address_to", toAddressMap);
        shipmentMap.put("address_from", fromAddressMap);
        shipmentMap.put("parcels", parcels);
        shipmentMap.put("async", false);

        Shipment shipment = Shipment.create(shipmentMap);

        List<Rate> rates = shipment.getRates();
        Rate rate = rates.get(0);

        System.out.println("Getting shipping label..");
        Map<String, Object> transParams = new HashMap<String, Object>();
        transParams.put("rate", rate.getObjectId());
        transParams.put("async", false);
        Transaction transaction = Transaction.create(transParams);

        if (transaction.getStatus().equals("SUCCESS")) {
            System.out.println(String.format("Label url : %s", transaction.getLabelUrl()));
            System.out.println(String.format("Tracking number : %s", transaction.getTrackingNumber()));
        } else {
            System.out.println(String.format("An Error has occured while generating you label. Messages : %s",
                    transaction.getMessages()));
        }
    }
}
