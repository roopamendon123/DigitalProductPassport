interface Proof {
  jws: string;
  type: string;
  created: string;
  proofPurpose: string;
  verificationMethod: string;
}

interface PPAPDetails {
  QAConfirmed: boolean;
  approvalDate: string;
}

interface ScanDetail {
  scanDate: string;
  scanImage: string;
  scanTitle: string;
  scanImageSize: string;
  QARequirementsMet: string;
}

interface CTScansDetails {
  impurities: string;
  anodeOverhang: string;
  batteryCellScan: ScanDetail;
  housingAndTheCathode: ScanDetail;
  casingCathodeAndAnode: ScanDetail;
  casingAndElectrodeAlignment: string;
}

interface PerformanceMetrics {
  energyDensity: number;
  capacityRetention: string;
  chargeDischargeRate: string;
}

interface SafetyDurabilityTests {
  lifeCycle: string;
  vibrationShock: string;
  shortCircuitResistance: string;
}

interface BatteryCellHomologation {
  chargeRate: string;
  energyDensity: number;
  lifeExpectancy: string;
}

interface TemperatureToleranceTests {
  operatingRange: string;
  thermalStability: string;
  coolingEfficiency: string;
}

export interface CredentialSubjectVariant1 {
  id: string;
  PPAP?: PPAPDetails;
  CTScans?: CTScansDetails;
  batchUUID?: string;
  cellSampleUUID?: string;
  performanceMetrics?: PerformanceMetrics;
  safetyDurabilityTests?: SafetyDurabilityTests;
  batteryCellHomologation?: BatteryCellHomologation;
  temperatureToleranceTests?: TemperatureToleranceTests;
}

interface MaterialComposition {
  materialName: string;
  materialWeight: number;
  materialPercentageMassFraction: number;
}

interface CellChemistry {
  anodeActiveMaterials: MaterialComposition[];
  anodeCompositionOther: MaterialComposition[];
  cathodeActiveMaterials: MaterialComposition[];
  cathodeCompositionOther: MaterialComposition[];
  electrolyteComposition: MaterialComposition[];
  recyclateContentActiveMaterials: MaterialComposition[];
}

interface MaterialFile {
  fileUrl: string;
  fileName: string;
  fileSize: string;
  uploadDate: string;
}

interface SupplyChainFile {
  fileUrl: string;
  fileName: string;
  fileSize: string;
  uploadDate: string;
}

interface CertificationFile {
  fileUrl: string;
  fileName: string;
  fileSize: string;
  uploadDate: string;
}

export interface CredentialSubjectVariant2 {
  id: string;
  esgScore?: string;
  location?: string;
  voltageMin?: string;
  batteryModel?: string;
  manufacturer?: string;
  batteryWeight?: string;
  cellChemistry?: CellChemistry;
  materialFiles?: MaterialFile[];
  ratedCapacity?: string;
  voltageMaximum?: string;
  voltageNominal?: string;
  batteryCategory?: string;
  lifeCycleStatus?: string;
  supplyChainFiles?: SupplyChainFile[];
  dueDiligenceScore?: string;
  manufacturingDate?: string;
  certificationFiles?: CertificationFile[];
  expectedLifetimeKm?: string;
  greenhouseGasScore?: string;
  manufacturingPlace?: string;
  chemistryComposition?: string;
  tripEnergyEfficiency?: string;
  expectedLifetimeMiles?: string;
  expectedLifetimeYears?: string;
  maximumPowerPermitted?: string;
  cycleLifeReferenceTest?: string;
  originalPowerCapability?: string;
  temperatureIdleStateMax?: string;
  temperatureIdleStateMin?: string;
  commercialWarrantyPeriod?: string;
  initialDischargeCapacity?: string;
  manufacturerIdentification?: string;
  exhaustionCapacityThreshold?: string;
}

export interface BatteryDetails {
  id: string;
  type: string[];
  proof: Proof;
  issuer: string;
  issuanceDate: string;
  "@context": string[];
  credentialSubject: CredentialSubjectVariant1 | CredentialSubjectVariant2;
}
