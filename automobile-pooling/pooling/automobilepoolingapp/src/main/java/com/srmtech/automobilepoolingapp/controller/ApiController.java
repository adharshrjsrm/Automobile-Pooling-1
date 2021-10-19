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
        Places p2 = new Places(2L, "Adyar");
        Places p3 = new Places(3L, "Alandur");
        Places p4 = new Places(4L, "Alapakkam");
        Places p5 = new Places(5L, "Alwarpet");
        Places p6 = new Places(6L, "Alwarthirunagar");
        Places p7 = new Places(7L, "Ambattur");
        Places p8 = new Places(8L, "Aminjikarai");
        Places p9 = new Places(9L, "Anna Nagar");
        Places p10 = new Places(10L, "Annanur");
        Places p11 = new Places(11L, "Arumbakkam");
        Places p12 = new Places(12L, "Ashok Nagar");
        Places p13 = new Places(13L, "Avadi");
        Places p14 = new Places(14L, "Ayanavaram");
        Places p15 = new Places(15L, "Besant Nagar");
        Places p16 = new Places(16L, "Basin Bridge");
        Places p17 = new Places(17L, "Chepauk");
        Places p18 = new Places(18L, "Chetput");
        Places p19 = new Places(19L, "Chintadripet");
        Places p20 = new Places(20L, "Chitlapakkam");
        Places p21 = new Places(21L, "Choolai");
        Places p22 = new Places(22L, "Choolaimedu");
        Places p23 = new Places(23L, "Chrompet");
        Places p24 = new Places(24L, "Egmore");
        Places p25 = new Places(25L, "Ekkaduthangal");
        Places p26 = new Places(26L, "Eranavur");
        Places p27 = new Places(27L, "Ennore");
        Places p28 = new Places(28L, "Foreshore Estate");
        Places p29 = new Places(29L, "Fort St. George");
        Places p30 = new Places(30L, "George Town");
        Places p31 = new Places(31L, "Gopalapuram");
        Places p32 = new Places(32L, "Government Estate");
        Places p33 = new Places(33L, "Guindy");
        Places p34 = new Places(34L, "Gerugambakkam");
        Places p35 = new Places(35L, "IIT Madras");
        Places p36 = new Places(36L, "Injambakkam");
        Places p37 = new Places(37L, "ICF");
        Places p38 = new Places(38L, "Iyyapanthangal");
        Places p39 = new Places(39L, "Jafferkhanpet");
        Places p40 = new Places(40L, "Karapakkam");
        Places p41 = new Places(41L, "Kattivakkam");
        Places p42 = new Places(42L, "Kattupakkam");
        Places p43 = new Places(43L, "Kazhipattur");
        Places p44 = new Places(44L, "K.K. Nagar");
        Places p45 = new Places(45L, "Keelkattalai");
        Places p46 = new Places(46L, "Kattivakkam");
        Places p47 = new Places(47L, "Kilpauk");
        Places p48 = new Places(48L, "Kodambakkam");
        Places p49 = new Places(49L, "Kodungaiyur");
        Places p50 = new Places(50L, "Kolathur");
        Places p51 = new Places(51L, "Korattur");
        Places p52 = new Places(52L, "Korukkupet");
        Places p53 = new Places(53L, "Kottivakkam");
        Places p54 = new Places(54L, "Kotturpuram");
        Places p55 = new Places(55L, "Kottur");
        Places p56 = new Places(56L, "Kovilambakkam");
        Places p57 = new Places(57L, "Koyambedu");
        Places p58 = new Places(58L, "Kundrathur");
        Places p59 = new Places(59L, "Madhavaram");
        Places p60 = new Places(60L, "Madhavaram Milk Colony");
        Places p61 = new Places(61L, "Madipakkam");
        Places p62 = new Places(62L, "Madambakkam");
        Places p63 = new Places(63L, "Maduravoyal");
        Places p64 = new Places(64L, "Manali");
        Places p65 = new Places(65L, "Manali New Town");
        Places p66 = new Places(66L, "Manapakkam");
        Places p67 = new Places(67L, "Mandaveli");
        Places p68 = new Places(68L, "Mangadu");
        Places p69 = new Places(69L, "Mannady");
        Places p70 = new Places(70L, "Mathur");
        Places p71 = new Places(71L, "Medavakkam");
        Places p72 = new Places(72L, "Meenambakkam");
        Places p73 = new Places(73L, "MGR Nagar");
        Places p74 = new Places(74L, "Minjur");
        Places p75 = new Places(75L, "Mogappair");
        Places p76 = new Places(76L, "MKB Nagar");
        Places p77 = new Places(77L, "Mount Road");
        Places p78 = new Places(78L, "Moolakadai");
        Places p79 = new Places(79L, "Moulivakkam");
        Places p80 = new Places(80L, "Mugalivakkam");
        Places p81 = new Places(81L, "Mudichur");
        Places p82 = new Places(82L, "Mylapore");
        Places p83 = new Places(83L, "Nandanam");
        Places p84 = new Places(84L, "Nanganallur");
        Places p85 = new Places(85L, "Nanmangalam");
        Places p86 = new Places(86L, "Neelankarai");
        Places p87 = new Places(87L, "Nemilichery");
        Places p88 = new Places(88L, "Nesapakkam");
        Places p89 = new Places(89L, "Nolambur");
        Places p90 = new Places(90L, "Noombal");
        Places p91 = new Places(91L, "Nungambakkam");
        Places p92 = new Places(92L, "Otteri");
        Places p93 = new Places(93L, "Padi");
        Places p94 = new Places(94L, "Pakkam");
        Places p95 = new Places(95L, "Palavakkam");
        Places p96 = new Places(96L, "Pallavaram");
        Places p97 = new Places(97L, "Pallikaranai");
        Places p98 = new Places(98L, "Pammal");
        Places p99 = new Places(99L, "Park Town");
        Places p100 = new Places(100L, "Parry's Corner");
        Places p101 = new Places(101L, "Pattabiram");
        Places p102 = new Places(102L, "Pattaravakkam");
        Places p103 = new Places(103L, "Pazhavanthangal");
        Places p104 = new Places(104L, "Peerkankaranai");
        Places p105 = new Places(105L, "Perambur");
        Places p106 = new Places(106L, "Peravallur");
        Places p107 = new Places(107L, "Perumbakkam");
        Places p108 = new Places(108L, "Perungalathur");
        Places p109 = new Places(109L, "Perungudi");
        Places p110 = new Places(110L, "Pozhichalur");
        Places p111 = new Places(111L, "Poonamallee");
        Places p112 = new Places(112L, "Porur");
        Places p113 = new Places(113L, "Pudupet");
        Places p114 = new Places(114L, "Pulianthope");
        Places p115 = new Places(115L, "Purasaiwalkam");
        Places p116 = new Places(116L, "Puthagaram");
        Places p117 = new Places(117L, "Puzhal");
        Places p118 = new Places(118L, "Puzhuthivakkam/ Ullagaram");
        Places p119 = new Places(119L, "Raj Bhavan");
        Places p120 = new Places(120L, "Ramavaram");
        Places p121 = new Places(121L, "Red Hills");
        Places p122 = new Places(122L, "Royapettah");
        Places p123 = new Places(123L, "Royapuram");
        Places p124 = new Places(124L, "Saidapet");
        Places p125 = new Places(125L, "Saligramam");
        Places p126 = new Places(126L, "Santhome");
        Places p127 = new Places(127L, "Sembakkam");
        Places p128 = new Places(128L, "Selaiyur");
        Places p129 = new Places(129L, "Shenoy Nagar");
        Places p130 = new Places(130L, "Sholavaram");
        Places p131 = new Places(131L, "Sholinganallur");
        Places p132 = new Places(132L, "Sithalapakkam");
        Places p133 = new Places(133L, "Sowcarpet");
        Places p134 = new Places(134L, "St.Thomas Mount");
        Places p135 = new Places(135L, "Surapet");
        Places p136 = new Places(136L, "Tambaram");
        Places p137 = new Places(137L, "Teynampet");
        Places p138 = new Places(138L, "Tharamani");
        Places p139 = new Places(139L, "T. Nagar");
        Places p140 = new Places(140L, "Thirumangalam");
        Places p141 = new Places(141L, "Thirumullaivoyal");
        Places p142 = new Places(142L, "Thiruneermalai");
        Places p143 = new Places(143L, "Thiruninravur");
        Places p144 = new Places(144L, "Thiruvanmiyur");
        Places p145 = new Places(145L, "Tiruverkadu");
        Places p146 = new Places(146L, "Thiruvotriyur");
        Places p147 = new Places(147L, "Thuraipakkam");
        Places p148 = new Places(148L, "Tirusulam");
        Places p149 = new Places(149L, "Tiruvallikeni");
        Places p150 = new Places(150L, "Tondiarpet");
        Places p151 = new Places(151L, "United India Colony");
        Places p152 = new Places(152L, "Vandalur");
        Places p153 = new Places(153L, "Vadapalani");
        Places p154 = new Places(154L, "Valasaravakkam");
        Places p155 = new Places(155L, "Vallalar Nagar");
        Places p156 = new Places(156L, "Vanagaram");
        Places p157 = new Places(157L, "Velachery");
        Places p158 = new Places(158L, "Velappanchavadi");
        Places p159 = new Places(159L, "Villivakkam");
        Places p160 = new Places(160L, "Virugambakkam");
        Places p161 = new Places(161L, "Vyasarpadi");
        Places p162 = new Places(162L, "Washermanpet");
        Places p163 = new Places(163L, "West Mambalam");

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
