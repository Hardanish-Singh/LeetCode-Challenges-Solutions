# Leetcode: https://leetcode.com/problems/design-parking-system/

class ParkingSystem:
    def __init__(self, big: int, medium: int, small: int):
        self.parking_lots = [big, medium, small]

    def addCar(self, carType: int) -> bool:
        self.parking_lots[carType - 1] -= 1
        return 0 <= self.parking_lots[carType - 1]

# Your ParkingSystem object will be instantiated and called as such:
# obj = ParkingSystem(big, medium, small)
# param_1 = obj.addCar(carType)