from common.json import ModelEncoder
from .models import Technician, AutomobileVO, Appointment


class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "id",
        "first_name",
        "last_name",
        "employee_id",
    ]

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "sold",
    ]

class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "id",
        "date_time",
        "reason",
        "status",
        "vin",
        "customer",
        "technician",
        "vip",
    ]
    encoders = {
        # "vin": AutomobileVOEncoder(),
        "technician": TechnicianEncoder(),
    }


    # def get_extra_data(self, o):
    #     return {"technician": o.technician.employee_id}
