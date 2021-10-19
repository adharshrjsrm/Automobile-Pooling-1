package com.srmtech.automobilepoolingapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import javax.validation.Valid;

import com.srmtech.automobilepoolingapp.exception.ResourceNotFoundException;
import com.srmtech.automobilepoolingapp.model.*;
import com.srmtech.automobilepoolingapp.payload.response.MsgResponse;
import com.srmtech.automobilepoolingapp.service.*;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class ApiController extends BaseController {

    // User
    @Autowired
    private UserService userservice;

    @PreAuthorize("isAuthenticated()")
    @PostMapping(value = "/user/add")
    public ResponseEntity<MsgResponse> addDetails(@Valid @RequestBody User user) {
        userservice.saveUser(user);
        return new ResponseEntity<>(new MsgResponse("User added successfully."), HttpStatus.CREATED);
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping(value = "/user/get")
    public ResponseEntity<List<User>> findAllUsers() throws ResourceNotFoundException {
        List<User> userList = userservice.getUser();
        return new ResponseEntity<>(userList, HttpStatus.OK);

    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping(value = "/user/{Id}")
    public ResponseEntity<User> findUserById(@PathVariable Long userId) throws ResourceNotFoundException {
        User userList = userservice.getUserById(userId);
        return new ResponseEntity<>(userList, HttpStatus.OK);
    }

    @PreAuthorize("isAuthenticated()")
    @DeleteMapping(value = "/user/delete/{id}")
    public ResponseEntity<MsgResponse> deleteUser(@PathVariable Long id) throws ResourceNotFoundException {
        userservice.deleteUser(id);
        return new ResponseEntity<>(new MsgResponse("User deleted successfully."), HttpStatus.OK);
    }

    @PreAuthorize("isAuthenticated()")
    @PutMapping("/user/update")
    public ResponseEntity<MsgResponse> updateUser(@Valid @RequestBody User user) throws ResourceNotFoundException {
        userservice.updateUser(user);
        return new ResponseEntity<>(new MsgResponse("User updated successfully."), HttpStatus.ACCEPTED);
    }

    // Vehicle
    @Autowired
    private VehicleService vehicleservice;

    @PreAuthorize("isAuthenticated()")
    @GetMapping(value = "/vehicle/{Id}")
    public ResponseEntity<Vehicle> findUserById(@PathVariable int vehicleId) throws ResourceNotFoundException {
        Vehicle vehicleList = vehicleservice.getVehicleById(vehicleId);
        return new ResponseEntity<>(vehicleList, HttpStatus.OK);
    }

    @PreAuthorize("isAuthenticated()")
    @PostMapping(value = "/vehicle/add")
    public ResponseEntity<MsgResponse> saveVehicle(@RequestBody Vehicle vehicle) {
        vehicleservice.getdetails(vehicle);
        return new ResponseEntity<>(new MsgResponse("Vehicle added successfully"), HttpStatus.CREATED);
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping(value = "/vehicle/get")
    public ResponseEntity<List<Vehicle>> findAllVehicle() throws ResourceNotFoundException {
        List<Vehicle> vehicleList = vehicleservice.getVehicle();
        return new ResponseEntity<>(vehicleList, HttpStatus.OK);
    }

    @PreAuthorize("isAuthenticated()")
    @PutMapping("/vehicle/update")
    public ResponseEntity<MsgResponse> updateUser(@Valid @RequestBody Vehicle vehicle) {
        vehicleservice.updateVehicle(vehicle);
        return new ResponseEntity<>(new MsgResponse("Vehicle added successfully"), HttpStatus.ACCEPTED);
    }

    // Ride
    @Autowired
    private RideService rideservice;

    @PreAuthorize("isAuthenticated()")
    @PostMapping(value = "/ride/add")
    public ResponseEntity<MsgResponse> addRide(@RequestBody Ride ride) {
        rideservice.saveRide(ride);
        return new ResponseEntity<>(new MsgResponse("Ride added successfully."), HttpStatus.CREATED);
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping(value = "/ride/get")
    public ResponseEntity<List<Ride>> findAllRide() throws ResourceNotFoundException {
        List<Ride> rideList = rideservice.getRide();
        return new ResponseEntity<>(rideList, HttpStatus.OK);
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping(value = "/ride/{Id}")
    public ResponseEntity<Ride> findRideById(@PathVariable Long rideId) throws ResourceNotFoundException {
        Ride rideList = rideservice.getRideById(rideId);
        return new ResponseEntity<>(rideList, HttpStatus.OK);
    }

    @Autowired
    private RideDetailsService rideDetailsService;

    @PreAuthorize("isAuthenticated()")
    @PostMapping(value = "/ridedetails/add")
    public ResponseEntity<MsgResponse> addRide(@RequestBody RideDetails rideDetails) {
        rideDetailsService.saveRideDetails(rideDetails);
        return new ResponseEntity<>(new MsgResponse("Ride details added successfully."), HttpStatus.CREATED);
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping(value = "/ridedetails/get")
    public ResponseEntity<List<RideDetails>> findAllRideDe() throws ResourceNotFoundException {
        List<RideDetails> rideList = rideDetailsService.getRideDetails();
        return new ResponseEntity<>(rideList, HttpStatus.OK);
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping(value = "/ridedetails/{Id}")
    public ResponseEntity<RideDetails> findRideDetailsById(@PathVariable Long rideId) throws ResourceNotFoundException {
        RideDetails rideDetailsList = rideDetailsService.getRideDetailsById(rideId);
        return new ResponseEntity<>(rideDetailsList, HttpStatus.OK);
    }

    // Places
    @Autowired
    private PlacesService placesservice;

    @PreAuthorize("isAuthenticated()")
    @GetMapping(value = "/places/get")
    public ResponseEntity<List<Places>> findAllPlaces() throws ResourceNotFoundException {
        List<Places> placeList = placesservice.getPlaces();
        return new ResponseEntity<>(placeList, HttpStatus.OK);

    }

    @PreAuthorize("isAuthenticated()")
    @PostMapping(value = "/places/add")
    public ResponseEntity<MsgResponse> addPlaces(@RequestBody Places places) {

        Places p1 = new Places(1L, "Adambakkam");
        Places p2 = new Places("2	", "Adyar	");
        Places p3 = new Places("3	", "Alandur	");
        Places p4 = new Places("4	", "Alapakkam	");
        Places p5 = new Places("5	", "Alwarpet	");
        Places p6 = new Places("6	", "Alwarthirunagar	");
        Places p7 = new Places("7	", "Ambattur	");
        Places p8 = new Places("8	", "Aminjikarai	");
        Places p9 = new Places("9	", "Anna Nagar	");
        Places p10 = new Places("10	", "Annanur	");
        Places p11 = new Places("11	", "Arumbakkam	");
        Places p12 = new Places("12	", "Ashok Nagar	");
        Places p13 = new Places("13	", "Avadi	");
        Places p14 = new Places("14	", "Ayanavaram	");
        Places p15 = new Places("15	", "Besant Nagar	");
        Places p16 = new Places("16	", "Basin Bridge	");
        Places p17 = new Places("17	", "Chepauk	");
        Places p18 = new Places("18	", "Chetput	");
        Places p19 = new Places("19	", "Chintadripet	");
        Places p20 = new Places("20	", "Chitlapakkam	");
        Places p21 = new Places("21	", "Choolai	");
        Places p22 = new Places("22	", "Choolaimedu	");
        Places p23 = new Places("23	", "Chrompet	");
        Places p24 = new Places("24	", "Egmore	");
        Places p25 = new Places("25	", "Ekkaduthangal	");
        Places p26 = new Places("26	", "Eranavur	");
        Places p27 = new Places("27	", "Ennore	");
        Places p28 = new Places("28	", "Foreshore Estate	");
        Places p29 = new Places("29	", "Fort St. George	");
        Places p30 = new Places("30	", "George Town	");
        Places p31 = new Places("31	", "Gopalapuram	");
        Places p32 = new Places("32	", "Government Estate	");
        Places p33 = new Places("33	", "Guindy	");
        Places p34 = new Places("34	", "Gerugambakkam	");
        Places p35 = new Places("35	", "IIT Madras	");
        Places p36 = new Places("36	", "Injambakkam	");
        Places p37 = new Places("37	", "ICF	");
        Places p38 = new Places("38	", "Iyyapanthangal	");
        Places p39 = new Places("39	", "Jafferkhanpet	");
        Places p40 = new Places("40	", "Karapakkam	");
        Places p41 = new Places("41	", "Kattivakkam	");
        Places p42 = new Places("42	", "Kattupakkam	");
        Places p43 = new Places("43	", "Kazhipattur	");
        Places p44 = new Places("44	", "K.K. Nagar	");
        Places p45 = new Places("45	", "Keelkattalai	");
        Places p46 = new Places("46	", "Kattivakkam	");
        Places p47 = new Places("47	", "Kilpauk	");
        Places p48 = new Places("48	", "Kodambakkam	");
        Places p49 = new Places("49	", "Kodungaiyur	");
        Places p50 = new Places("50	", "Kolathur	");
        Places p51 = new Places("51	", "Korattur	");
        Places p52 = new Places("52	", "Korukkupet	");
        Places p53 = new Places("53	", "Kottivakkam	");
        Places p54 = new Places("54	", "Kotturpuram	");
        Places p55 = new Places("55	", "Kottur	");
        Places p56 = new Places("56	", "Kovilambakkam	");
        Places p57 = new Places("57	", "Koyambedu	");
        Places p58 = new Places("58	", "Kundrathur	");
        Places p59 = new Places("59	", "Madhavaram	");
        Places p60 = new Places("60	", "Madhavaram Milk Colony	");
        Places p61 = new Places("61	", "Madipakkam	");
        Places p62 = new Places("62	", "Madambakkam	");
        Places p63 = new Places("63	", "Maduravoyal	");
        Places p64 = new Places("64	", "Manali	");
        Places p65 = new Places("65	", "Manali New Town	");
        Places p66 = new Places("66	", "Manapakkam	");
        Places p67 = new Places("67	", "Mandaveli	");
        Places p68 = new Places("68	", "Mangadu	");
        Places p69 = new Places("69	", "Mannady	");
        Places p70 = new Places("70	", "Mathur	");
        Places p71 = new Places("71	", "Medavakkam	");
        Places p72 = new Places("72	", "Meenambakkam	");
        Places p73 = new Places("73	", "MGR Nagar	");
        Places p74 = new Places("74	", "Minjur	");
        Places p75 = new Places("75	", "Mogappair	");
        Places p76 = new Places("76	", "MKB Nagar	");
        Places p77 = new Places("77	", "Mount Road	");
        Places p78 = new Places("78	", "Moolakadai	");
        Places p79 = new Places("79	", "Moulivakkam	");
        Places p80 = new Places("80	", "Mugalivakkam	");
        Places p81 = new Places("81	", "Mudichur	");
        Places p82 = new Places("82	", "Mylapore	");
        Places p83 = new Places("83	", "Nandanam	");
        Places p84 = new Places("84	", "Nanganallur	");
        Places p85 = new Places("85	", "Nanmangalam	");
        Places p86 = new Places("86	", "Neelankarai	");
        Places p87 = new Places("87	", "Nemilichery	");
        Places p88 = new Places("88	", "Nesapakkam	");
        Places p89 = new Places("89	", "Nolambur	");
        Places p90 = new Places("90	", "Noombal	");
        Places p91 = new Places("91	", "Nungambakkam	");
        Places p92 = new Places("92	", "Otteri	");
        Places p93 = new Places("93	", "Padi	");
        Places p94 = new Places("94	", "Pakkam	");
        Places p95 = new Places("95	", "Palavakkam	");
        Places p96 = new Places("96	", "Pallavaram	");
        Places p97 = new Places("97	", "Pallikaranai	");
        Places p98 = new Places("98	", "Pammal	");
        Places p99 = new Places("99	", "Park Town	");
        Places p100 = new Places("100	", "Parry's Corner	");
        Places p101 = new Places("101	", "Pattabiram	");
        Places p102 = new Places("102	", "Pattaravakkam	");
        Places p103 = new Places("103	", "Pazhavanthangal	");
        Places p104 = new Places("104	", "Peerkankaranai	");
        Places p105 = new Places("105	", "Perambur	");
        Places p106 = new Places("106	", "Peravallur	");
        Places p107 = new Places("107	", "Perumbakkam	");
        Places p108 = new Places("108	", "Perungalathur	");
        Places p109 = new Places("109	", "Perungudi	");
        Places p110 = new Places("110	", "Pozhichalur	");
        Places p111 = new Places("111", "Poonamallee	");
        Places p112 = new Places("112	", "Porur	");
        Places p113 = new Places("113	", "Pudupet	");
        Places p114 = new Places("114	", "Pulianthope	");
        Places p115 = new Places("115	", "Purasaiwalkam	");
        Places p116 = new Places("116	", "Puthagaram	");
        Places p117 = new Places("117	", "Puzhal	");
        Places p118 = new Places("118	", "Puzhuthivakkam/ Ullagaram	");
        Places p119 = new Places("119	", "Raj Bhavan	");
        Places p120 = new Places("120	", "Ramavaram	");
        Places p121 = new Places("121	", "Red Hills	");
        Places p122 = new Places("122	", "Royapettah	");
        Places p123 = new Places("123	", "Royapuram	");
        Places p124 = new Places("124	", "Saidapet	");
        Places p125 = new Places("125	", "Saligramam	");
        Places p126 = new Places("126	", "Santhome	");
        Places p127 = new Places("127	", "Sembakkam	");
        Places p128 = new Places("128	", "Selaiyur	");
        Places p129 = new Places("129	", "Shenoy Nagar	");
        Places p130 = new Places("130	", "Sholavaram	");
        Places p131 = new Places("131	", "Sholinganallur	");
        Places p132 = new Places("132	", "Sithalapakkam	");
        Places p133 = new Places("133	", "Sowcarpet	");
        Places p134 = new Places("134	", "St.Thomas Mount	");
        Places p135 = new Places("135	", "Surapet	");
        Places p136 = new Places("136	", "Tambaram	");
        Places p137 = new Places("137	", "Teynampet	");
        Places p138 = new Places("138	", "Tharamani	");
        Places p139 = new Places("139	", "T. Nagar	");
        Places p140 = new Places("140	", "Thirumangalam	");
        Places p141 = new Places("141	", "Thirumullaivoyal	");
        Places p142 = new Places("142	", "Thiruneermalai	");
        Places p143 = new Places("143	", "Thiruninravur	");
        Places p144 = new Places("144	", "Thiruvanmiyur	");
        Places p145 = new Places("145	", "Tiruverkadu	");
        Places p146 = new Places("146	", "Thiruvotriyur	");
        Places p147 = new Places("147	", "Thuraipakkam	");
        Places p148 = new Places("148	", "Tirusulam	");
        Places p149 = new Places("149	", "Tiruvallikeni	");
        Places p150 = new Places("150	", "Tondiarpet	");
        Places p151 = new Places("151	", "United India Colony	");
        Places p152 = new Places("152	", "Vandalur	");
        Places p153 = new Places("153	", "Vadapalani	");
        Places p154 = new Places("154	", "Valasaravakkam	");
        Places p155 = new Places("155	", "Vallalar Nagar	");
        Places p156 = new Places("156	", "Vanagaram	");
        Places p157 = new Places("157	", "Velachery	");
        Places p158 = new Places("158	", "Velappanchavadi	");
        Places p159 = new Places("159	", "Villivakkam	");
        Places p160 = new Places("160	", "Virugambakkam	");
        Places p161 = new Places("161	", "Vyasarpadi	");
        Places p162 = new Places("162	", "Washermanpet	");
        Places p163 = new Places("163	", "West Mambalam	");

        List<Places> places = Arrays.asList(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17,
                p18, p19, p20, p21, p22, p23, p24, p25, p26, p27, p28, p29, p30, p31, p32, p33, p34, p35, p36, p37, p38,
                p39, p40, p41, p42, p43, p44, p45, p46, p47, p48, p49, p50, p51, p52, p53, p54, p55, p56, p57, p58, p59,
                p60, p61, p62, p63, p64, p65, p66, p67, p68, p69, p70, p71, p72, p73, p74, p75, p76, p77, p78, p79, p80,
                p81, p82, p83, p84, p85, p86, p87, p88, p89, p90, p91, p92, p93, p94, p95, p96, p97, p98, p99, p100,
                p101, p102, p103, p104, p105, p106, p107, p108, p109, p110, p111, p112, p113, p114, p115, p116, p117,
                p118, p119, p120, p121, p122, p123, p124, p125, p126, p127, p128, p129, p130, p131, p132, p133, p134,
                p135, p136, p137, p138, p139, p140, p141, p142, p143, p144, p145, p146, p147, p148, p149, p150, p151,
                p152, p153, p154, p155, p156, p157, p158, p159, p160, p161, p162, p163);
        placesservice.savePlaces(places);
        return new ResponseEntity<>(new MsgResponse("Ride details added successfully."), HttpStatus.CREATED);
    }

}
