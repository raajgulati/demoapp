class CreateContributionWithdrawlDetails < ActiveRecord::Migration
  def change
    create_table :contribution_withdrawl_details do |t|
      t.string :uan, index: true
      t.text :particulars
      t.string :particulars_type
      t.float :deposit_employee_share
      t.float :deposit_employer_share
      t.float :withdrawls_employee_share
      t.float :withdrawls_employer_share
      t.float :pension_contribution
      t.belongs_to :user_profile, index: true

      t.timestamps
    end
  end
end
