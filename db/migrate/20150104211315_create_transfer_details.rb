class CreateTransferDetails < ActiveRecord::Migration
  def change
    create_table :transfer_details do |t|
      t.string :uan, index: true
      t.string :transfer_from_member_id
      t.string :transfer_from_office_id
      t.float :amount_employee_share
      t.float :amount_employer_share
      t.date :service_details_date_of_joining
      t.date :service_details_date_of_exit
      t.string :service_details_actual_service
      t.date :approved_date
      t.belongs_to :user_profile, index: true

      t.timestamps
    end
  end
end
