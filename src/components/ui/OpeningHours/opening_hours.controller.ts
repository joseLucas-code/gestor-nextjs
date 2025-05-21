import { OpeningHoursProps } from "./types";

export function useOpeningHoursController({
  opening_hours,
}: Pick<OpeningHoursProps, "opening_hours">) {
  // 🧮 Função auxiliar para converter "HH:mm" em minutos desde 00:00
  const toMinutes = (time: string): number => {
    const [h, m] = time.split(":").map(Number);
    return h * 60 + m;
  };

  // ✅ Lógica principal
  const isClosed = () => {
    if (opening_hours.open === "null" || opening_hours.close === "null") {
      return true;
    }

    // 🕓 Hora atual em São Paulo
    const now = new Date();
    const saoPauloNow = new Date(
      now.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }),
    );

    const currentMinutes =
      saoPauloNow.getHours() * 60 + saoPauloNow.getMinutes();

    const closeMinutes = toMinutes(opening_hours.close);

    // 🔒 Fechado se já passou do horário de fechar
    return currentMinutes >= closeMinutes;
  };

  return {
    isClosed,
  };
}
