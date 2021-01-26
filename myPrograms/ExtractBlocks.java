package myPrograms;

import java.io.*;
import java.util.Enumeration;
import java.util.StringTokenizer;
import java.util.Vector;

import javax.lang.model.type.TypeKind;

public class ExtractBlocks {

    public static void main(String args[]) {
        try {
            BufferedReader br = new BufferedReader(new FileReader("myPrograms/042.txt"));
            String str = "";
            String token = "";
            Vector v_data = new Vector<>();
            Vector v_row;// = new Vector<>();
            while ((str = br.readLine()) != null) {
                v_row = new Vector<>();
                if (str.contains("AM") || str.contains("PM")) {
                    StringTokenizer st = new StringTokenizer(str, ",");

                    while (st.hasMoreTokens()) {
                        v_row.add(st.nextToken());
                    }

                    while ((str = br.readLine()) != null) {
                        if (str.contains("E")) {
                            st = new StringTokenizer(str, ",");
                            while (st.hasMoreTokens()) {
                                v_row.add(st.nextToken());
                            }
                        }
                        if (str.contains("Total")) {
                            break;
                        }
                    }
                }

                if (!v_row.isEmpty())
                    v_data.add(v_row);
            }
            // {"date":"27-Jan-21","blocks":[{"block":"3", "seat_nos" :
            // ["E723062","E723064"] },
            // { "block" : "4", "seat_nos" : ["E723065","E723066"] }]}
            // [19-Jan-21, AM, Block No :, 1, Room No :, E708464, 1, E708473, 2, E708488, 3,
            // E708496, 4, E708498, 5, E708503, 6,
            // E708509, 7, E708515, 8, E708520, 9, E708537, 10, E708539, 11, E708558, 12,
            // E708561, 13, E708563, 14, E708566, 15]
            Enumeration enu = v_data.elements();
            Vector temp;
            String date = "05-Feb-21";
            String jsonLine = "{\"date\":\"" + date + "\",\"blocks\":[ ";
            String tempJsonLine = "";
            int start;
            int total;
            int count = 0;
            while (enu.hasMoreElements()) {
                temp = (Vector) enu.nextElement();
                if (temp.elementAt(0).equals(date)) {
                    tempJsonLine += "\n{\"block\":\"" + temp.elementAt(3).toString() + "\",";
                    tempJsonLine += "\"seat_nos\" : [";
                    start = 5;
                    total = temp.size();
                    while (start < total) {
                        tempJsonLine += "\"" + temp.elementAt(start) + "\"";
                        if (!(start == (total - 1)))
                            tempJsonLine += ",";
                        count++;
                        start += 2;
                    }
                    tempJsonLine += "]},";

                }
                
            }
            tempJsonLine += "]}";
            jsonLine+=tempJsonLine;
            System.out.println(jsonLine);
            // System.out.println(count);
        } catch (Exception f) {
            System.out.println(f.toString());
        }

    }
}