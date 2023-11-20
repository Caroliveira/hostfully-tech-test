export const getReservationData = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const formData = new FormData(evt.currentTarget);

    const city = formData.get("city")?.toString();
    const checkIn = formData.get("checkIn")?.toString();
    const checkOut = formData.get("checkOut")?.toString();

    if (!city || !checkIn || !checkOut) return null;
    return {
      city,
      checkIn,
      checkOut,
      status: "Confirmed",
    };
};