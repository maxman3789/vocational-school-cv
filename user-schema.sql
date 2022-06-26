CREATE TABLE `students` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `first_name` varchar(200) NOT NULL,
 `last_name` varchar(200) NOT NULL,
 `program_id` int(11) NOT NULL,
 `referral_id` int(11) NOT NULL,
 `insurance_id` int(11) NOT NULL,
 `invoice_id` int(11) NOT NULL,
 `ref_emp_id` int(11) NOT NULL,
 `adjuster_id` int(11) NOT NULL,
 `attorney_id` int(11) NOT NULL,
 `campus_id` int(11) NOT NULL,
 `course_id` int(11) NOT NULL,
 `class_id` int(11) NOT NULL,
 `transcript_id` int(11) NOT NULL,
 `middle_name` varchar(200) NOT NULL,
 `student_number` int(11) NOT NULL,
 `email` varchar(200) NOT NULL,
 `username` text NOT NULL,
 `password` text NOT NULL,
 `student_type` text NOT NULL,
 `street` text NOT NULL,
 `unit` text NOT NULL,
 `city` text NOT NULL,
 `state_province` varchar(2) NOT NULL,
 `zip` text NOT NULL,
 `country` varchar(200) NOT NULL,
 `mailing_address` text NOT NULL,
 `home_phone` text NOT NULL,
 `cell_phone` text NOT NULL,
 `nationality` varchar(200) NOT NULL,
 `birth_date` date NOT NULL,
 `age` int(11) NOT NULL,
 `gender` varchar(200) NOT NULL,
 `social_security` varchar(11) NOT NULL,
 `advisor` text NOT NULL,
 `student_deposit_ref_date` date NOT NULL,
 `education_highest_level` varchar(200) NOT NULL,
 `preferred_language` varchar(200) NOT NULL,
 `residency_status` text NOT NULL,
 `student_status` text NOT NULL,
 `registration_date` date NOT NULL,
 `referral_date` date NOT NULL,
 `eligible_to_work` text NOT NULL,
 `placed` text NOT NULL,
 `drivers_license_state` text NOT NULL,
 `drivers_state_id` varchar(11) NOT NULL,
 `drivers_state_exp` date NOT NULL,
 `drivers_state_image` text NOT NULL,
 `eligible_to_work_in_usa` text NOT NULL,
 `ITIN` varchar(200) NOT NULL,
 `injury_date` date NOT NULL,
 `voucher_amount` double NOT NULL,
 `voucher_exp_date` date NOT NULL,
 `voucher_doc_upload` text NOT NULL,
 `emergency_contact_name` varchar(200) NOT NULL,
 `emergency_relationship` varchar(200) NOT NULL,
 `emergency_home` text NOT NULL,
 `emergency_work` text NOT NULL,
 `emergency_cell` text NOT NULL,
 `registration_status` text NOT NULL,
 `graduation_withdraw_date` date NOT NULL,
 `draft_enrollment_agreement` text NOT NULL,
 `enrollment_created_by` varchar(200) NOT NULL,
 `enrollment_signed_date` date NOT NULL,
 `enrollment_sign` text NOT NULL,
 `agent` varchar(200) NOT NULL,
 `passport_number` text NOT NULL,
 `visa_type` text NOT NULL,
 `visa_exp_date` date NOT NULL,
 `sap_status` text NOT NULL,
 `student_sap_date` date NOT NULL,
 `student_sap_not_met_status` text NOT NULL,
 `proof_of_graduation_type` text NOT NULL,
 `tuition_rate` double NOT NULL,
 `student_billing_name` varchar(200) NOT NULL,
 `student_billing_email` text NOT NULL,
 `student_billing_street` text NOT NULL,
 `student_billing_city` text NOT NULL,
 `student_billing_state` varchar(2) NOT NULL,
 `student_billing_zip` text NOT NULL,
 `student_billing_country` text NOT NULL,
 `student_billing_phone` text NOT NULL,
 `student_guardian_name` text NOT NULL,
 `student_guardian_relationship` text NOT NULL,
 `student_guardian_phone` text NOT NULL,
 `student_guardian_email` text NOT NULL,
 `student_guardian_street` text NOT NULL,
 `student_guardian_city` text NOT NULL,
 `student_guardian_zip` text NOT NULL,
 `student_guardian_state` varchar(2) NOT NULL,
 `student_guardian_country` text NOT NULL,
 `student_disabled` text NOT NULL,
 `student_disability_desc` text NOT NULL,
 `student_learning_difficulty` text NOT NULL,
 `student_learning_difficulty_desc` text NOT NULL,
 `work_restrictions` text NOT NULL,
 `student_first_time` text NOT NULL,
 `student_creation_date` date NOT NULL,
 `addendum_signed` text NOT NULL,
 `addendum_created_by` text NOT NULL,
 `addendum_created_date` date NOT NULL,
 `addendum_draft` text NOT NULL,
 `addendum_new_completion_date` date NOT NULL,
 `addendum_new_program_schedule` text NOT NULL,
 `addendum_new_start_date` date NOT NULL,
 `addendum_signed_date` date NOT NULL,
 `addendum_to_original_contract` text NOT NULL,
 `application_for_admission` text NOT NULL,
 `application_for_admission_date` text NOT NULL,
 `custom_atb_test_results` int(11) NOT NULL,
 `case_type` text NOT NULL,
 `cbm_student` text NOT NULL,
 `celsa_37` text NOT NULL,
 `ceremony_semester` text NOT NULL,
 `ceremony_participation` text NOT NULL,
 `ceremony_participation_notes` text NOT NULL,
 `receiving_certificate_or_diploma` text NOT NULL,
 `certificate_on` text NOT NULL,
 `certificate_sent` date NOT NULL,
 `check_amount_received` date NOT NULL,
 `check_number` int(15) NOT NULL,
 `check_received` text NOT NULL,
 `check_received_date` date NOT NULL,
 `check_received_copy` text NOT NULL,
 `claim_number_purchase_order` int(11) NOT NULL,
 `completed_by` text NOT NULL,
 `completed_excel` text NOT NULL,
 `completed_excel_cert` text NOT NULL,
 `completed_marketing_and_quickbooks` text NOT NULL,
 `completed_marketing_and_quickbooks_cert` text NOT NULL,
 `completed_real_estate_legal_aspects` text NOT NULL,
 `completed_real_estate_legal_aspects_cert` text NOT NULL,
 `completed_real_estate_marketing` text NOT NULL,
 `completed_real_estate_marketing_cert` text NOT NULL,
 `completed_real_estate_practice` text NOT NULL,
 `completed_real_estate_practice_cert` int(11) NOT NULL,
 `completed_real_estate_principles` text NOT NULL,
 `completed_real_estate_principles_cert` text NOT NULL,
 `completed_windows` text NOT NULL,
 `completed_windows_cert` text NOT NULL,
 `completed_word` text NOT NULL,
 `completed_word_cert` text NOT NULL,
 `currently_working` text NOT NULL,
 `department_of_labor_student` text NOT NULL,
 `labor_needs_status_every_30_days` text NOT NULL,
 `educational_material_access` text NOT NULL,
 `graduated_on` date NOT NULL,
 `owns_a_car` text NOT NULL,
 `schedule` text NOT NULL,
 `how_is_your_vision_desc` text NOT NULL,
 `student_grad_high_school` text NOT NULL,
 `ged` text NOT NULL,
 `student_grad_high_school_ged_date` date NOT NULL,
 `high_school_transcripts_upload` text NOT NULL,
 `high_school_name` varchar(200) NOT NULL,
 `last_grade_completed` text NOT NULL,
 `english_language_read` text NOT NULL,
 `english_language_read_level` text NOT NULL,
 `english_language_speak` text NOT NULL,
 `english_language_speak_level` text NOT NULL,
 `english_language_speak_write` text NOT NULL,
 `english_language_speak_write_level` text NOT NULL,
 `other_language_name` text NOT NULL,
 `other_language_read` text NOT NULL,
 `other_language_read_level` text NOT NULL,
 `other_language_speak` text NOT NULL,
 `other_language_speak_level` text NOT NULL,
 `other_language_write` text NOT NULL,
 `other_language_write_level` text NOT NULL,
 `employer_name` varchar(200) NOT NULL,
 `occupation` varchar(200) NOT NULL,
 `pay_rate` double NOT NULL,
 `employment_date_from` date NOT NULL,
 `employment_date_to` date NOT NULL,
 `reason_for_leaving` text NOT NULL,
 `student_expressed_interest` text NOT NULL,
 `student_expressed_goal` text NOT NULL,
 `student_schedule_interested_in` text NOT NULL,
 `student_program_interest` text NOT NULL,
 `training_online_onsite` varchar(200) NOT NULL,
 `program_language_interested` varchar(200) NOT NULL,
 `campus_location_interested` varchar(200) NOT NULL,
 `campus_address` text NOT NULL,
 `refund_officially_withdrawn_from_program` date NOT NULL,
 `refund_total_hours_participated` int(11) NOT NULL,
 `refund_prorated_amount` double NOT NULL,
 `refund_prorated_check_num` int(15) NOT NULL,
 `refund_prorated_check_date` date NOT NULL,
 `has_computer` text NOT NULL,
 `has_computer_notes` text NOT NULL,
 `need_bst` text NOT NULL,
 `progress_report_advisory_notes_1_due_date` date NOT NULL,
 `progress_report_advisory_notes_2_due_date` date NOT NULL,
 `student_right_to_cancel` text NOT NULL,
 PRIMARY KEY (`id`),
 KEY `program_con` (`program_id`),
 KEY `referral_con` (`referral_id`),
 KEY `insurance_con` (`insurance_id`),
 KEY `invoice_con` (`invoice_id`),
 KEY `student_adjuster_con` (`adjuster_id`),
 KEY `student_refemp_con` (`ref_emp_id`),
 KEY `student_attorney_con` (`attorney_id`),
 KEY `student_campus_con` (`campus_id`),
 KEY `student_course` (`course_id`),
 KEY `student_class` (`class_id`),
 KEY `student_transcript_con` (`transcript_id`),
 CONSTRAINT `insurance_con` FOREIGN KEY (`insurance_id`) REFERENCES `insurance` (`id`),
 CONSTRAINT `invoice_con` FOREIGN KEY (`invoice_id`) REFERENCES `invoice` (`id`),
 CONSTRAINT `program_con` FOREIGN KEY (`program_id`) REFERENCES `program` (`id`),
 CONSTRAINT `referral_con` FOREIGN KEY (`referral_id`) REFERENCES `referral` (`id`),
 CONSTRAINT `student_adjuster_con` FOREIGN KEY (`adjuster_id`) REFERENCES `adjusters` (`id`),
 CONSTRAINT `student_attorney_con` FOREIGN KEY (`attorney_id`) REFERENCES `attorney` (`id`),
 CONSTRAINT `student_campus_con` FOREIGN KEY (`campus_id`) REFERENCES `campus` (`id`),
 CONSTRAINT `student_class` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`),
 CONSTRAINT `student_course` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`),
 CONSTRAINT `student_refemp_con` FOREIGN KEY (`ref_emp_id`) REFERENCES `referralemployee` (`id`),
 CONSTRAINT `student_transcript_con` FOREIGN KEY (`transcript_id`) REFERENCES `transcript` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

CREATE TABLE `studentattendance` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `type` text NOT NULL,
 `date` date NOT NULL,
 `reason_type` text NOT NULL,
 `reason_desc` text NOT NULL,
 `left_early` text NOT NULL,
 `student_id` int(11) NOT NULL,
 PRIMARY KEY (`id`),
 KEY `attendance_student_con` (`student_id`),
 CONSTRAINT `attendance_student_con` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

CREATE TABLE `referral` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `organization` varchar(200) DEFAULT NULL,
 `address` text NOT NULL,
 `email` text NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

CREATE TABLE `referralemployee` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `refemp_name` varchar(200) NOT NULL,
 `referralemp_phone` text NOT NULL,
 `referral_id` int(11) NOT NULL,
 PRIMARY KEY (`id`),
 KEY `referral_id_con` (`referral_id`),
 CONSTRAINT `referral_id_con` FOREIGN KEY (`referral_id`) REFERENCES `referral` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

CREATE TABLE `program` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `program_name` varchar(200) NOT NULL,
 `instructor_id` int(11) NOT NULL,
 `semester_id` int(11) NOT NULL,
 `program_code` varchar(200) NOT NULL,
 `program_category` varchar(200) NOT NULL,
 `duration` text NOT NULL,
 `min_credit_hours` int(11) NOT NULL,
 `capacity` int(11) NOT NULL,
 `req_credit_hours` int(11) NOT NULL,
 `department_id` int(11) NOT NULL,
 PRIMARY KEY (`id`),
 KEY `instructor_con` (`instructor_id`),
 KEY `semester_con` (`semester_id`),
 KEY `program_dep_con` (`department_id`),
 CONSTRAINT `instructor_con` FOREIGN KEY (`instructor_id`) REFERENCES `instructor` (`id`),
 CONSTRAINT `program_dep_con` FOREIGN KEY (`department_id`) REFERENCES `department` (`id`),
 CONSTRAINT `semester_con` FOREIGN KEY (`semester_id`) REFERENCES `semester` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

CREATE TABLE `programregistration` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `program_id` int(11) NOT NULL,
 `campus_id` int(11) NOT NULL,
 `semester_id` int(11) NOT NULL,
 `enroll_type` text NOT NULL,
 `program_version` text NOT NULL,
 `registration_status` text NOT NULL,
 `method_of_delivery` text NOT NULL,
 `transfer_units` int(11) NOT NULL,
 `mid_point_date` date NOT NULL,
 `start_date` date NOT NULL,
 `scheduled_end_date` date NOT NULL,
 `registration_date` date NOT NULL,
 `date_of_determination` date NOT NULL,
 `cohort_start_date` date NOT NULL,
 `graduation_withdraw_date` date NOT NULL,
 `withdrawal_reason` text NOT NULL,
 `reg_note` int(11) NOT NULL,
 PRIMARY KEY (`id`),
 KEY `programreg_program_con` (`program_id`),
 KEY `programreg_campus_con` (`campus_id`),
 KEY `programreg_semester_con` (`semester_id`),
 CONSTRAINT `programreg_campus_con` FOREIGN KEY (`campus_id`) REFERENCES `campus` (`id`),
 CONSTRAINT `programreg_program_con` FOREIGN KEY (`program_id`) REFERENCES `program` (`id`),
 CONSTRAINT `programreg_semester_con` FOREIGN KEY (`semester_id`) REFERENCES `semester` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

CREATE TABLE `invoice` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `invoice_number` int(11) DEFAULT NULL,
 `invoice_void` text DEFAULT NULL,
 `invoice_date` int(11) DEFAULT NULL,
 `invoice_packet` varchar(200) NOT NULL,
 `voided_by` varchar(200) NOT NULL,
 `revised_invoice_approved` text NOT NULL,
 `revised_invoice_date` date NOT NULL,
 `revised_invoice_amount` double NOT NULL,
 `revised_invoice_notes` text NOT NULL,
 `revised_invoice_upload` text NOT NULL,
 `insurance_refused_to_pay_revised_invoice` text NOT NULL,
 `insurance_refused_revised_invoice_date` date NOT NULL,
 `revised_invoice_pending` text NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

CREATE TABLE `insurance` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `insurance_name` varchar(200) DEFAULT NULL,
 `insurance_address` text NOT NULL,
 `insurance_city` text NOT NULL,
 `insurance_state` text NOT NULL,
 `insurance_zip` text NOT NULL,
 `insurance_phone` text NOT NULL,
 `insurance_fax` text NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=103 DEFAULT CHARSET=utf8mb4

CREATE TABLE `adjusters` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `adjuster_name` varchar(200) NOT NULL,
 `adjuster_phone` varchar(200) NOT NULL,
 `adjuster_fax` varchar(200) NOT NULL,
 `adjuster_email` text NOT NULL,
 `adjuster_supervisor` varchar(200) NOT NULL,
 `adjuster_supervisor_phone` text NOT NULL,
 `adjuster_supervisor_fax` text NOT NULL,
 `insurance_id` int(11) NOT NULL,
 PRIMARY KEY (`id`),
 KEY `insurance_id_con` (`insurance_id`),
 CONSTRAINT `insurance_id_con` FOREIGN KEY (`insurance_id`) REFERENCES `insurance` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

CREATE TABLE `payment` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `student_id` int(11) NOT NULL,
 `payment_amount` double NOT NULL,
 `paid_on` date NOT NULL,
 `payment_method` text NOT NULL,
 `note` text NOT NULL,
 `fee_name` varchar(200) NOT NULL,
 `total_amount_payable` double NOT NULL,
 `total_amount_paid` double NOT NULL,
 `total_amount_owed` double NOT NULL,
 `payment_due_date` date NOT NULL,
 PRIMARY KEY (`id`),
 KEY `student_con` (`student_id`),
 CONSTRAINT `student_con` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

CREATE TABLE `semester` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `semester_name` varchar(200) NOT NULL,
 `enrollment_semester` varchar(200) NOT NULL,
 `start` date NOT NULL,
 `end` date NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

CREATE TABLE `staff` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `first_name` varchar(200) NOT NULL,
 `middle_name` varchar(200) NOT NULL,
 `last_name` varchar(200) NOT NULL,
 `email` text NOT NULL,
 `username` text NOT NULL,
 `password` text NOT NULL,
 `street` text NOT NULL,
 `city` text NOT NULL,
 `state` text NOT NULL,
 `zip` text NOT NULL,
 `country` text NOT NULL,
 `phone` text NOT NULL,
 `designation` text NOT NULL,
 `type` varchar(200) NOT NULL,
 `status` text NOT NULL,
 `creation_date` date NOT NULL,
 `campus_id` int(11) NOT NULL,
 `department_id` int(11) NOT NULL,
 PRIMARY KEY (`id`),
 KEY `staff_campus_con` (`campus_id`),
 KEY `staff_department_con` (`department_id`),
 CONSTRAINT `staff_campus_con` FOREIGN KEY (`campus_id`) REFERENCES `campus` (`id`),
 CONSTRAINT `staff_department_con` FOREIGN KEY (`department_id`) REFERENCES `department` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

CREATE TABLE `staffattendance` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `staff_id` int(11) NOT NULL,
 `present` varchar(200) NOT NULL,
 `absent` varchar(200) NOT NULL,
 `tardy` varchar(200) NOT NULL,
 `excused` varchar(200) NOT NULL,
 `attendance_date` date NOT NULL,
 `reason_type` text NOT NULL,
 `reason_text` text NOT NULL,
 `left_early` text NOT NULL,
 PRIMARY KEY (`id`),
 KEY `staffatt_staff_con` (`staff_id`),
 CONSTRAINT `staffatt_staff_con` FOREIGN KEY (`staff_id`) REFERENCES `staff` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

CREATE TABLE `campus` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `campus_name` varchar(200) NOT NULL,
 `street` text NOT NULL,
 `city` text NOT NULL,
 `state` text NOT NULL,
 `country` text NOT NULL,
 `phone` text NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

CREATE TABLE `class` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `name` varchar(200) NOT NULL,
 `status` text NOT NULL,
 `capacity` int(11) NOT NULL,
 `enrollment_status` int(11) NOT NULL,
 `class_start` date NOT NULL,
 `class-end` date NOT NULL,
 `campus_id` int(11) NOT NULL,
 `department_id` int(11) NOT NULL,
 `instructor_id` int(11) NOT NULL,
 `semester_id` int(11) NOT NULL,
 PRIMARY KEY (`id`),
 KEY `class_campus_con` (`campus_id`),
 KEY `class_department_con` (`department_id`),
 KEY `class_semester_con` (`semester_id`),
 KEY `class_instructor_id` (`instructor_id`),
 CONSTRAINT `class_campus_con` FOREIGN KEY (`campus_id`) REFERENCES `campus` (`id`),
 CONSTRAINT `class_department_con` FOREIGN KEY (`department_id`) REFERENCES `department` (`id`),
 CONSTRAINT `class_instructor_id` FOREIGN KEY (`instructor_id`) REFERENCES `instructor` (`id`),
 CONSTRAINT `class_semester_con` FOREIGN KEY (`semester_id`) REFERENCES `semester` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

CREATE TABLE `course` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `course_number` varchar(200) NOT NULL,
 `title` varchar(200) NOT NULL,
 `duration` text NOT NULL,
 `expires_after` text NOT NULL,
 `description` text NOT NULL,
 `credit_hours` int(11) NOT NULL,
 `fa_unit` text NOT NULL,
 `continuing_ed_credits` int(11) NOT NULL,
 `instructional_hours` int(11) NOT NULL,
 `lab_hours` int(11) NOT NULL,
 `clinical_hours` int(11) NOT NULL,
 `capacity` int(11) NOT NULL,
 `prereq_credit_hours` int(11) NOT NULL,
 `subcontract_unexcused_absence` text NOT NULL,
 `min_score_for_credit` int(11) NOT NULL,
 `min_age` int(11) NOT NULL,
 `department_id` int(11) NOT NULL,
 PRIMARY KEY (`id`),
 KEY `course_department_coon` (`department_id`),
 CONSTRAINT `course_department_coon` FOREIGN KEY (`department_id`) REFERENCES `department` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

CREATE TABLE `department` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `department_name` text NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

CREATE TABLE `instructor` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `first_name` varchar(200) NOT NULL,
 `middle_name` varchar(200) NOT NULL,
 `last_name` varchar(200) NOT NULL,
 `email` text NOT NULL,
 `username` varchar(200) NOT NULL,
 `password` varchar(200) NOT NULL,
 `street` text NOT NULL,
 `city` text NOT NULL,
 `state` text NOT NULL,
 `zip` text NOT NULL,
 `country` text NOT NULL,
 `creation_date` date NOT NULL,
 `campus_id` int(11) NOT NULL,
 `department_id` int(11) NOT NULL,
 PRIMARY KEY (`id`),
 KEY `campus_con` (`campus_id`),
 KEY `department_con` (`department_id`),
 CONSTRAINT `campus_con` FOREIGN KEY (`campus_id`) REFERENCES `campus` (`id`),
 CONSTRAINT `department_con` FOREIGN KEY (`department_id`) REFERENCES `department` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

CREATE TABLE `instructorattendance` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `instructor_id` int(11) NOT NULL,
 `present` text NOT NULL,
 `absent` text NOT NULL,
 `tardy` text NOT NULL,
 `excused` text NOT NULL,
 `attendance_date` date NOT NULL,
 `reason_type` text NOT NULL,
 `reason_text` text NOT NULL,
 `left_early` text NOT NULL,
 PRIMARY KEY (`id`),
 KEY `instructoratt_instructor` (`instructor_id`),
 CONSTRAINT `instructoratt_instructor` FOREIGN KEY (`instructor_id`) REFERENCES `instructor` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

CREATE TABLE `transcript` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `score` int(11) NOT NULL,
 `grade_title` text NOT NULL,
 `gpa` float NOT NULL,
 `credit` int(11) NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

CREATE TABLE `attorney` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `attorney_name` varchar(200) NOT NULL,
 `attorney_law_firm` varchar(200) NOT NULL,
 `law_firm_address` text NOT NULL,
 `attorney_phone` text NOT NULL,
 `attorney_email` text NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

CREATE TABLE `careerplacement` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `program_id` int(11) NOT NULL,
 `placement_date` date NOT NULL,
 `staff_initials` varchar(200) NOT NULL,
 `placement_status` text NOT NULL,
 `job_type` varchar(200) NOT NULL,
 `weekly_hours` int(11) NOT NULL,
 `company_name` varchar(200) NOT NULL,
 `address` text NOT NULL,
 `city` text NOT NULL,
 `state` text NOT NULL,
 `zip` text NOT NULL,
 `country` varchar(200) NOT NULL,
 `company_email` text NOT NULL,
 `company_web_address` text NOT NULL,
 `company_type` text NOT NULL,
 `training_related_employment` text NOT NULL,
 `salary_amount` double NOT NULL,
 `salary_type` text NOT NULL,
 `position` varchar(200) NOT NULL,
 `position_status` varchar(200) NOT NULL,
 `job_start_date` date NOT NULL,
 `benefits` text NOT NULL,
 `waiver` text NOT NULL,
 `job_end_date` date NOT NULL,
 `place_of_work` text NOT NULL,
 `contact_name` text NOT NULL,
 `contact_title` text NOT NULL,
 `contact_phone` text NOT NULL,
 `contact_fax` text NOT NULL,
 `reference` text NOT NULL,
 `comments` text NOT NULL,
 `customer_satisfaction_rate` text NOT NULL,
 `customer_satisfacton_rate_fall_off` text NOT NULL,
 `highest_level_of_certification` text NOT NULL,
 `resume_done` text NOT NULL,
 `resumed_posted` text NOT NULL,
 `staffing_services` text NOT NULL,
 `three_job_leads` text NOT NULL,
 `funding_source` text NOT NULL,
 `re_enrollment` text NOT NULL,
 `re_enrollment_type` text NOT NULL,
 `verification_date` date NOT NULL,
 `verification_status` text NOT NULL,
 `verification_note` text NOT NULL,
 `sat_for_all_parts_of_exam` text NOT NULL,
 `passed_exam` text NOT NULL,
 `license_number` int(11) NOT NULL,
 `second_employer` text NOT NULL,
 `self_employed` text NOT NULL,
 `salary_range` text NOT NULL,
 `waiver_reason` text NOT NULL,
 `business_planner_document` text NOT NULL,
 `eligible_to_work_para_trabajar` text NOT NULL,
 `resume_curriculum` int(11) NOT NULL,
 PRIMARY KEY (`id`),
 KEY `careerplacement_program` (`program_id`),
 CONSTRAINT `careerplacement_program` FOREIGN KEY (`program_id`) REFERENCES `program` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
