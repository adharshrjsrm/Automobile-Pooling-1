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
import java.util.Arrays;
import java.util.List;

import javax.validation.Valid;

import com.srmtech.automobilepoolingapp.exception.ResourceNotFoundException;
import com.srmtech.automobilepoolingapp.model.*;
import com.srmtech.automobilepoolingapp.payload.response.MsgResponse;
import com.srmtech.automobilepoolingapp.service.*;
import com.srmtech.automobilepoolingapp.repo.*;



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
    // @Autowired
    // private PlacesRepo placesrepo;

    // @PreAuthorize("isAuthenticated()")
    // @GetMapping(value = "/places/get")
    // public ResponseEntity<List<Places>> getAll() throws ResourceNotFoundException {
    //     return new ResponseEntity<>(placesrepo.getAll(), HttpStatus.OK);
    // }

    // @PreAuthorize("isAuthenticated()")
    // @PostMapping(value = "/places/add")
    // public ResponseEntity<Places> addPlaces() throws ResourceNotFoundException {

    //     Places p1 = new Places("Adambakkam");
    //     Places p2 = new Places("Adyar");
    //     Places p3 = new Places("Alandur");
    //     Places p4 = new Places("Alapakkam");
    //     Places p5 = new Places("Alwarpet");
    //     Places p6 = new Places("Alwarthirunagar");
    //     Places p7 = new Places("Ambattur");
    //     Places p8 = new Places("Aminjikarai");
    //     Places p9 = new Places("Anna Nagar");
    //     Places p10 = new Places("Annanur");
    //     Places p11 = new Places("Arumbakkam");
    //     Places p12 = new Places("Ashok Nagar");
    //     Places p13 = new Places("Avadi");
    //     Places p14 = new Places("Ayanavaram");
    //     Places p15 = new Places("Besant Nagar");
    //     Places p16 = new Places("Basin Bridge");
    //     Places p17 = new Places("Chepauk");
    //     Places p18 = new Places("Chetput");
    //     Places p19 = new Places("Chintadripet");
    //     Places p20 = new Places("Chitlapakkam");
    //     Places p21 = new Places("Choolai");
    //     Places p22 = new Places("Choolaimedu");
    //     Places p23 = new Places("Chrompet");
    //     Places p24 = new Places("Egmore");
    //     Places p25 = new Places("Ekkaduthangal");
    //     Places p26 = new Places("Eranavur");
    //     Places p27 = new Places("Ennore");
    //     Places p28 = new Places("Foreshore Estate");
    //     Places p29 = new Places("Fort St. George");
    //     Places p30 = new Places("George Town");
    //     Places p31 = new Places("Gopalapuram");
    //     Places p32 = new Places("Government Estate");
    //     Places p33 = new Places("Guindy");
    //     Places p34 = new Places("Gerugambakkam");
    //     Places p35 = new Places("IIT Madras");
    //     Places p36 = new Places("Injambakkam");
    //     Places p37 = new Places("ICF");
    //     Places p38 = new Places("Iyyapanthangal");
    //     Places p39 = new Places("Jafferkhanpet");
    //     Places p40 = new Places("Karapakkam");
    //     Places p41 = new Places("Kattivakkam");
    //     Places p42 = new Places("Kattupakkam");
    //     Places p43 = new Places("Kazhipattur");
    //     Places p44 = new Places("K.K. Nagar");
    //     Places p45 = new Places("Keelkattalai");
    //     Places p46 = new Places("Kattivakkam");
    //     Places p47 = new Places("Kilpauk");
    //     Places p48 = new Places("Kodambakkam");
    //     Places p49 = new Places("Kodungaiyur");
    //     Places p50 = new Places("Kolathur");
    //     Places p51 = new Places("Korattur");
    //     Places p52 = new Places("Korukkupet");
    //     Places p53 = new Places("Kottivakkam");
    //     Places p54 = new Places("Kotturpuram");
    //     Places p55 = new Places("Kottur");
    //     Places p56 = new Places("Kovilambakkam");
    //     Places p57 = new Places("Koyambedu");
    //     Places p58 = new Places("Kundrathur");
    //     Places p59 = new Places("Madhavaram");
    //     Places p60 = new Places("Madhavaram Milk Colony");
    //     Places p61 = new Places("Madipakkam");
    //     Places p62 = new Places("Madambakkam");
    //     Places p63 = new Places("Maduravoyal");
    //     Places p64 = new Places("Manali");
    //     Places p65 = new Places("Manali New Town");
    //     Places p66 = new Places("Manapakkam");
    //     Places p67 = new Places("Mandaveli");
    //     Places p68 = new Places("Mangadu");
    //     Places p69 = new Places("Mannady");
    //     Places p70 = new Places("Mathur");
    //     Places p71 = new Places("Medavakkam");
    //     Places p72 = new Places("Meenambakkam");
    //     Places p73 = new Places("MGR Nagar");
    //     Places p74 = new Places("Minjur");
    //     Places p75 = new Places("Mogappair");
    //     Places p76 = new Places("MKB Nagar");
    //     Places p77 = new Places("Mount Road");
    //     Places p78 = new Places("Moolakadai");
    //     Places p79 = new Places("Moulivakkam");
    //     Places p80 = new Places("Mugalivakkam");
    //     Places p81 = new Places("Mudichur");
    //     Places p82 = new Places("Mylapore");
    //     Places p83 = new Places("Nandanam");
    //     Places p84 = new Places("Nanganallur");
    //     Places p85 = new Places("Nanmangalam");
    //     Places p86 = new Places("Neelankarai");
    //     Places p87 = new Places("Nemilichery");
    //     Places p88 = new Places("Nesapakkam");
    //     Places p89 = new Places("Nolambur");
    //     Places p90 = new Places("Noombal");
    //     Places p91 = new Places("Nungambakkam");
    //     Places p92 = new Places("Otteri");
    //     Places p93 = new Places("Padi");
    //     Places p94 = new Places("Pakkam");
    //     Places p95 = new Places("Palavakkam");
    //     Places p96 = new Places("Pallavaram");
    //     Places p97 = new Places("Pallikaranai");
    //     Places p98 = new Places("Pammal");
    //     Places p99 = new Places("Park Town");
    //     Places p100 = new Places("Parry's Corner");
    //     Places p101 = new Places("Pattabiram");
    //     Places p102 = new Places("Pattaravakkam");
    //     Places p103 = new Places("Pazhavanthangal");
    //     Places p104 = new Places("Peerkankaranai");
    //     Places p105 = new Places("Perambur");
    //     Places p106 = new Places("Peravallur");
    //     Places p107 = new Places("Perumbakkam");
    //     Places p108 = new Places("Perungalathur");
    //     Places p109 = new Places("Perungudi");
    //     Places p110 = new Places("Pozhichalur");
    //     Places p111 = new Places("Poonamallee");
    //     Places p112 = new Places("Porur");
    //     Places p113 = new Places("Pudupet");
    //     Places p114 = new Places("Pulianthope");
    //     Places p115 = new Places("Purasaiwalkam");
    //     Places p116 = new Places("Puthagaram");
    //     Places p117 = new Places("Puzhal");
    //     Places p118 = new Places("Puzhuthivakkam/ Ullagaram");
    //     Places p119 = new Places("Raj Bhavan");
    //     Places p120 = new Places("Ramavaram");
    //     Places p121 = new Places("Red Hills");
    //     Places p122 = new Places("Royapettah");
    //     Places p123 = new Places("Royapuram");
    //     Places p124 = new Places("Saidapet");
    //     Places p125 = new Places("Saligramam");
    //     Places p126 = new Places("Santhome");
    //     Places p127 = new Places("Sembakkam");
    //     Places p128 = new Places("Selaiyur");
    //     Places p129 = new Places("Shenoy Nagar");
    //     Places p130 = new Places("Sholavaram");
    //     Places p131 = new Places("Sholinganallur");
    //     Places p132 = new Places("Sithalapakkam");
    //     Places p133 = new Places("Sowcarpet");
    //     Places p134 = new Places("St.Thomas Mount");
    //     Places p135 = new Places("Surapet");
    //     Places p136 = new Places("Tambaram");
    //     Places p137 = new Places("Teynampet");
    //     Places p138 = new Places("Tharamani");
    //     Places p139 = new Places("T. Nagar");
    //     Places p140 = new Places("Thirumangalam");
    //     Places p141 = new Places("Thirumullaivoyal");
    //     Places p142 = new Places("Thiruneermalai");
    //     Places p143 = new Places("Thiruninravur");
    //     Places p144 = new Places("Thiruvanmiyur");
    //     Places p145 = new Places("Tiruverkadu");
    //     Places p146 = new Places("Thiruvotriyur");
    //     Places p147 = new Places("Thuraipakkam");
    //     Places p148 = new Places("Tirusulam");
    //     Places p149 = new Places("Tiruvallikeni");
    //     Places p150 = new Places("Tondiarpet");
    //     Places p151 = new Places("United India Colony");
    //     Places p152 = new Places("Vandalur");
    //     Places p153 = new Places("Vadapalani");
    //     Places p154 = new Places("Valasaravakkam");
    //     Places p155 = new Places("Vallalar Nagar");
    //     Places p156 = new Places("Vanagaram");
    //     Places p157 = new Places("Velachery");
    //     Places p158 = new Places("Velappanchavadi");
    //     Places p159 = new Places("Villivakkam");
    //     Places p160 = new Places("Virugambakkam");
    //     Places p161 = new Places("Vyasarpadi");
    //     Places p162 = new Places("Washermanpet");
    //     Places p163 = new Places("West Mambalam");

    //     List<Places> places = Arrays.asList(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17,
    //             p18, p19, p20, p21, p22, p23, p24, p25, p26, p27, p28, p29, p30, p31, p32, p33, p34, p35, p36, p37, p38,
    //             p39, p40, p41, p42, p43, p44, p45, p46, p47, p48, p49, p50, p51, p52, p53, p54, p55, p56, p57, p58, p59,
    //             p60, p61, p62, p63, p64, p65, p66, p67, p68, p69, p70, p71, p72, p73, p74, p75, p76, p77, p78, p79, p80,
    //             p81, p82, p83, p84, p85, p86, p87, p88, p89, p90, p91, p92, p93, p94, p95, p96, p97, p98, p99, p100,
    //             p101, p102, p103, p104, p105, p106, p107, p108, p109, p110, p111, p112, p113, p114, p115, p116, p117,
    //             p118, p119, p120, p121, p122, p123, p124, p125, p126, p127, p128, p129, p130, p131, p132, p133, p134,
    //             p135, p136, p137, p138, p139, p140, p141, p142, p143, p144, p145, p146, p147, p148, p149, p150, p151,
    //             p152, p153, p154, p155, p156, p157, p158, p159, p160, p161, p162, p163);
    //     placesrepo.saveAll(places);
    //     return new ResponseEntity<>(places, HttpStatus.CREATED);
    // }

}
