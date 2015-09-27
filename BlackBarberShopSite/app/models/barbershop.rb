class Barbershop < ActiveRecord::Base
   has_many :opendates
  geocoded_by :BarbershopFullAddress
  after_validation :geocode
end
