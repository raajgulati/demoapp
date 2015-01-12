
class TransferDetail < ActiveRecord::Base
   belongs_to :user_profile

   def employee_wage
      ((amount_employee_share/0.12)/10).round * 10
   end
end
