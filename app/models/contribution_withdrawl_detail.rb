class ContributionWithdrawlDetail < ActiveRecord::Base
      belongs_to :user_profile

      def employee_wage
            if particulars_type == 'MONTHLY'
                  ((deposit_employee_share/0.12)/10).round * 10
            else
                  0
            end
      end

end
