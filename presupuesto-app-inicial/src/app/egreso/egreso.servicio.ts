import { Egreso } from "./egreso.model";

export class EgresoServicio
{
    egresos:Egreso[] = [
        new Egreso("Rengto Depto", 900),
        new Egreso("Ropa", 200)
    ];

    eliminar(egreso:Egreso)
    {
        const index = this.egresos.indexOf(egreso);
        this.egresos.splice(index, 1);
    }
}