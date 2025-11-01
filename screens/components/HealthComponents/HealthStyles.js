import { StyleSheet } from 'react-native';

export const healthStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  
  // Header Principal
  mainHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  burgerButton: {
    padding: 5,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  
  scrollContainer: {
    flex: 1,
  },
  
  // Header Customizado (mantido para outros componentes)
  customHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  notificationButton: {
    padding: 5,
  },
  notificationIcon: {
    fontSize: 20,
  },
  
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  backButton: {
    fontSize: 24,
    color: '#4576F2',
  },
  icon: {
    fontSize: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    marginHorizontal: 20,
    marginVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 25,
    height: 50,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  categoriesContainer: {
    paddingHorizontal: 20,
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  categoryText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
    color: '#000000',
  },
  doctorCard: {
    flexDirection: 'row',
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  doctorImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#4CAF50',
  },
  doctorInfo: {
    flex: 1,
    marginLeft: 15,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  doctorSpecialty: {
    fontSize: 14,
    color: '#666666',
    marginTop: 2,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  doctorPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4576F2',
    marginTop: 5,
  },
  scheduleButton: {
    backgroundColor: '#4576F2',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  scheduleButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  questionContainer: {
    padding: 20,
  },
  questionBox: {
    backgroundColor: '#FF4444',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  questionText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  consultationInfo: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  consultationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  consultationDate: {
    fontSize: 14,
    color: '#666666',
    marginTop: 5,
  },
  consultationPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4576F2',
    marginTop: 5,
  },
  continueButton: {
    backgroundColor: '#4576F2',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailsContainer: {
    padding: 20,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    padding: 15,
    marginVertical: 15,
    minHeight: 100,
    textAlignVertical: 'top',
  },
  paymentSection: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 2,
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  paymentText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#000000',
  },
  calendarContainer: {
    padding: 20,
  },
  calendar: {
    marginBottom: 30,
  },
  calendarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 15,
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  calendarDay: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    backgroundColor: '#F5F5F5',
  },
  selectedDay: {
    backgroundColor: '#4576F2',
  },
  calendarDayText: {
    fontSize: 16,
    color: '#000000',
  },
  selectedDayText: {
    color: '#FFFFFF',
  },
  timeContainer: {
    marginBottom: 30,
  },
  timeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 15,
  },
  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  timeSlot: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    margin: 5,
  },
  selectedTimeSlot: {
    backgroundColor: '#4576F2',
  },
  timeText: {
    fontSize: 14,
    color: '#000000',
  },
  confirmedContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  confirmedTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginVertical: 20,
  },
  appointmentDetails: {
    backgroundColor: '#F5F5F5',
    padding: 20,
    borderRadius: 10,
    marginVertical: 20,
    alignItems: 'center',
  },
  detailText: {
    fontSize: 16,
    color: '#000000',
    marginVertical: 2,
  },
  detailsButton: {
    borderWidth: 1,
    borderColor: '#4576F2',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  detailsButtonText: {
    color: '#4576F2',
    fontSize: 14,
    fontWeight: 'bold',
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginVertical: 15,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#E0E0E0',
  },
  activeTab: {
    borderBottomColor: '#4576F2',
  },
  tabText: {
    fontSize: 16,
    color: '#666666',
  },
  activeTabText: {
    color: '#4576F2',
    fontWeight: 'bold',
  },
  appointmentCard: {
    flexDirection: 'row',
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  appointmentInfo: {
    flex: 1,
    marginLeft: 15,
  },
  appointmentDateTime: {
    fontSize: 14,
    color: '#666666',
    marginTop: 5,
  },
  appointmentActions: {
    alignItems: 'flex-end',
  },
  cancelButton: {
    backgroundColor: '#FF4444',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 10,
  },
  cancelButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  recordItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  recordInfo: {
    flex: 1,
  },
  recordDate: {
    fontSize: 14,
    color: '#666666',
  },
  recordDescription: {
    fontSize: 16,
    color: '#000000',
    marginTop: 5,
  },

  // Novos estilos para a nova interface
  navigationButtons: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginVertical: 15,
    gap: 10,
  },
  navButton: {
    flex: 1,
    backgroundColor: '#4576F2',
    borderRadius: 10,
    padding: 15,
    position: 'relative',
  },
  navButtonContent: {
    borderRadius: 10,
    alignItems: 'center',
  },
  navButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'start',
  },
  indicator: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  greenIndicator: {
    backgroundColor: '#4CAF50',
  },
  purpleIndicator: {
    backgroundColor: '#9C27B0',
  },
  orangeIndicator: {
    backgroundColor: '#FF9800',
  },
  searchSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  locationSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 25,
    gap: 8,
    minWidth: 120,
  },
  locationText: {
    fontSize: 14,
    color: '#000000',
    fontWeight: '500',
  },
  dropdownIcon: {
    fontSize: 12,
    color: '#666666',
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 25,
    gap: 10,
  },
  microphoneButton: {
    padding: 5,
  },
  microphoneIcon: {
    fontSize: 16,
  },
  quickActions: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
    gap: 10,
  },
  quickActionButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    gap: 5,
  },
  consultationsButton: {
    backgroundColor: '#20B2AA',
  },
  examsButton: {
    backgroundColor: '#9C27B0',
  },
  caregiversButton: {
    backgroundColor: '#FF6B35',
  },
  heartIcon: {
    fontSize: 20,
  },
  testTubeIcon: {
    fontSize: 20,
  },
  peopleIcon: {
    fontSize: 20,
  },
  quickActionText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  professionalsSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  professionalCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 2,
    borderColor: '#E8F5E8',
  },
  featuredBanner: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#4CAF50',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
  },
  featuredText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  sponsoredText: {
    position: 'absolute',
    top: 10,
    right: 15,
    color: '#666666',
    fontSize: 12,
    fontStyle: 'italic',
  },
  professionalHeader: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 15,
  },
  professionalImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#4CAF50',
  },
  professionalInfo: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  professionalName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  verifiedIcon: {
    color: '#4CAF50',
    fontSize: 16,
    fontWeight: 'bold',
  },
  professionalSpecialty: {
    fontSize: 14,
    color: '#666666',
    marginTop: 2,
  },
  starIcon: {
    fontSize: 14,
  },
  ratingText: {
    fontSize: 12,
    color: '#666666',
    marginLeft: 2,
  },
  priceContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  priceLabel: {
    fontSize: 10,
    color: '#666666',
  },
  priceValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4576F2',
  },
  servicesContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 10,
  },
  serviceTag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  teleconsultTag: {
    backgroundColor: '#E3F2FD',
  },
  presentialTag: {
    backgroundColor: '#FCE4EC',
  },
  serviceText: {
    fontSize: 12,
    fontWeight: '500',
  },
  appointmentsInfo: {
    marginBottom: 10,
  },
  appointmentsText: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  availabilityText: {
    fontSize: 12,
    color: '#666666',
    marginTop: 2,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom: 10,
  },
  locationText: {
    fontSize: 12,
    color: '#666666',
  },
  timeSlotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  timeSlot: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  seeMoreButton: {
    marginLeft: 'auto',
  },
  seeMoreText: {
    color: '#4576F2',
    fontSize: 12,
    fontWeight: '500',
  },
});
